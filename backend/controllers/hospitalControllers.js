const asyncHandler = require("express-async-handler");
const Hospitals = require("../models/hospitalSchema");
const Doctors = require("../models/doctorSchema");
const {
  sendNotification,
  playersId,
  externalUserId,
} = require("./notificationControllers.js");

const registerHospital = asyncHandler(async (req, res) => {
  try {
    const { name, email, password, contact1, contact2 } = await req.body;
    const events = []; //need atleast empty events at beginning
    if (!name || !email || !password || !contact1 || !contact2) {
      res.status(400);
      throw new Error("ALL FIELDS REQUIRED");
    }
    const existHospital = await Hospitals.findOne({ email });
    if (!existHospital) {
      const newHopital = new Hospitals({
        name,
        email,
        password,
        contact1,
        contact2,
        events,
      }).save((err, hospital) => {
        if (err) {
          res.status(400);
          throw new Error(err);
        }
        if (hospital) {
          res.status(200).json(hospital);
        }
      });
    } else {
      res.status(400);
      throw new Error("EMAIL ALREADY REGISTERED");
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const loginHospital = asyncHandler(async (req, res) => {
  try {
    const { email, password } = await req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("ALL FIELDS REQUIRED");
    }

    const existHospital = await Hospitals.findOne({ email });
    if (existHospital && (await existHospital.matchPassword(password))) {
      res.status(200).json(existHospital);
    } else {
      res.status(404);
      throw new Error("Invalid Credientials");
    }
  } catch (error) {
    res.status(400);
    throw new Error("Invalid Credientals");
  }
});

const allHospitals = asyncHandler(async (req, res) => {
  console.log("hi");
  try {
    const allHospital = await Hospitals.find();
    res.status(200).json(allHospital);
  } catch (error) {
    res.status(400);
    throw new Error("Invalid Credientals");
  }
});

const individualHospital = asyncHandler(async (req, res) => {
  try {
    const hospital = await Hospitals.findById(req.params.id).select(
      "-password"
    );

    res.status(200).json(hospital);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const upateHospital = asyncHandler(async (req, res) => {
  try {
    const hospital = await Hospitals.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(hospital);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const addService = asyncHandler(async (req, res) => {
  try {
    const { topic, desc, serviceCharge } = req.body;
    const hospital = await Hospitals.findByIdAndUpdate(req.params.id, {
      $push: {
        services: {
          topic,
          desc,
          serviceCharge,
        },
      },
    });
    res.status(200).json(hospital);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const addEvents = asyncHandler(async (req, res) => {
  try {
    // const { eventName, date, desc, eventImg } = req.body;
    const hospital = await Hospitals.findByIdAndUpdate(req.params.id, {
      $push: {
        events: {
          eventName: req.body.eventName,
          date: req.body.date,
          desc: req.body.desc,
          eventImg: req.body.eventImg,
        },
      },
    });
    await hospital.save();
    console.log(hospital);
    res.status(200).json(hospital);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
  let message = {
    app_id: "561aeb8f-a644-4d7c-9c8b-0a2de9878340",
    contents: {
      en: `${req.body.desc} is being organized on date ${req.body.date} on ${hospital.name}`,
    },
    headings: {
      en: `${req.body.eventName}`,
    },
    // include_external_user_ids: externalUserId,
    // include_player_ids: playersId, //to all subscribed devices
    included_segments: ["Subscribed Users"], //to all subscribers
  };
  await sendNotification(message);
});

const addDoctors = asyncHandler(async (req, res) => {
  try {
    const hospitals = await Hospitals.findById(req.params.id);
    const {
      name,
      exp,
      spec,
      contacts,
      email,
      date,
      doctorId,
      pic,
      docPassword,
    } = await req.body;

    if (!name || !doctorId || !contacts || !docPassword) {
      res.status(400);
      throw new Error("ALL FIELDS REQUIRED");
    }
    const newDoctors = new Doctors({
      name,
      exp,
      spec,
      contacts,
      email,
      workingOn: req.params.id,
      date,
      pic,
      docPassword,
    });
    await newDoctors.save();
    hospitals.doctors.push(newDoctors._id);
    hospitals.save();
    res.status(200).json(newDoctors);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const allDoctors = asyncHandler(async (req, res) => {
  console.log(req.params.id);
  try {
    const hospital = await Hospitals.findById(req.params.id);
    console.log(hospital);
    let a = [];
    for (let i = 0; i < hospital.doctors.length; i++) {
      const b = await Doctors.findById(hospital.doctors[i]).select(
        "-docPassword"
      );
      a.push(b);
    }
    res.status(200).json(a);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// allDoctors();
const addContacts = asyncHandler(async (req, res) => {
  try {
    const { name, number } = req.body;
    const hospital = await Hospitals.findByIdAndUpdate(req.params.id, {
      $push: {
        emergencyContacts: {
          name,
          number,
        },
      },
    });
    res.status(200).json(hospital);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const addBeds = asyncHandler(async (req, res) => {
  try {
    const { total, occupied, empty } = req.body;
    const hospital = await Hospitals.findByIdAndUpdate(req.params.id, {
      $push: {
        beds: {
          total,
          occupied,
          empty,
        },
      },
    });
    res.status(200).json(hospital);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const addVaccancy = asyncHandler(async (req, res) => {
  try {
    const { status, position, amount, desc } = req.body;
    const hospital = await Hospitals.findByIdAndUpdate(req.params.id, {
      $push: {
        vaccancy: {
          status,
          position,
          amount,
          desc,
        },
      },
    });
    res.status(200).json(hospital);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const bedTypes = asyncHandler(async (req, res) => {
  try {
    const { icu, ventilator, other } = req.body;
    const hospital = await Hospitals.findByIdAndUpdate(req.params.id, {
      $push: {
        bedTypes: {
          icu,
          ventilator,
          other,
        },
      },
    });
    res.status(200).json(hospital);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const hospitalDetails = asyncHandler(async (req, res) => {
  try {
    const hospital = await Hospitals.findById(req.params.id).select("-doctors");
    res.status(200).json(hospital);
  } catch (e) {
    res.status(400);
    throw new Error(error);
  }
});

const hospitalReview = asyncHandler(async (req, res) => {
  const { comment, userId, ratings } = req.body;
  try {
    const reviews = await Hospitals.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          reviews: {
            comment,
            userId,
            ratings,
            username,
            profilePic,
          },
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

//all hospitals events

const allHospitalsEvents = asyncHandler(async (req, res) => {
  const hospitals = await Hospitals.find();
  let allEventsId = [];
  let allEvents = [];
  for (const hospital of hospitals) {
    if (hospital.events.length > 0) {
      for (const event of hospital.events) {
        allEventsId.push(event);
      }
    }
  }
  res.json(allEventsId);
});

module.exports = {
  registerHospital,
  loginHospital,
  individualHospital,
  upateHospital,
  addService,
  addEvents,
  addContacts,
  addDoctors,
  addBeds,
  bedTypes,
  addVaccancy,
  allDoctors,
  hospitalDetails,
  allHospitals,
  hospitalReview,
  allHospitalsEvents,
};
