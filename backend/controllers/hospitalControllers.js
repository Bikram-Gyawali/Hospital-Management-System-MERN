const route = require("express").Router();
const asyncHandler = require("express-async-handler");
const Hospitals = require("../models/hospitalSchema");
const Doctors = require("../models/doctorSchema");

const registerHospital = asyncHandler(async (req, res) => {
  try {
    const { name, email, password, contact1, contact2 } = await req.body;
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

const allHospitals= asyncHandler(async(req, res)=>{
  console.log('hi')
  try {

    const allHospital= await Hospitals.find()
    res.status(200).json(allHospital)
  } catch (error) {
    res.status(400);
    throw new Error("Invalid Credientals");
  }
})

const individualHospital = asyncHandler(async (req, res) => {
  try {
    const hospital = await Hospitals.findById(req.param.id).select("-password");
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
    const { eventName, date, desc, eventImg } = req.body;
    const hospital = await Hospitals.findByIdAndUpdate(req.params.id, {
      $push: {
        events: {
          eventName,
          date,
          desc,
          eventImg,
        },
      },
    });

    res.status(200).json(hospital);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
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
    } = await req.body;

    if (!name || !doctorId || !contacts) {
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

const doctor = asyncHandler(async (req, res) => {
  try {
    const doctors = await Doctors.findById("60e06b4489d7b5146858634d");
    console.log(doctors);
    res.status(200).json(doctors);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const allDoctors = asyncHandler(async (req, res) => {
  console.log(req.params.id)
  try {
    const hospital = await Hospitals.findById(req.params.id);
    console.log(hospital)
    let a = [];
    for (let i = 0; i < hospital.doctors.length; i++) {
      const b = await Doctors.findById(hospital.doctors[i]);
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

const hospitalDetails= asyncHandler(async(req, res)=>{
  try{
    const hospital = await Hospitals.findById(req.params.id).select('-doctors')
    res.status(200).json(hospital)
    }catch(e){
    res.status(400)
    throw new Error(error);
  }
})

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
  allHospitals
};
