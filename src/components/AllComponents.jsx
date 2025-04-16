"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FirstComponent,
  SeconCOmponents,
  ThirdComponents,
  Last,
} from "./inputs/hoho";

const initailFOrmValus = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  dateOfBirth: "",
  profileImage: "",
};

export const AllComponents = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValue, setFormValue] = useState(initailFOrmValus);
  const [error, setError] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsedValue = JSON.parse(savedData);
      setFormValue(parsedValue);
      setCurrentStep(parsedValue.step);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setFormValue((previousValue) => ({
      ...previousValue,
      [name]: files ? files[0] : value,
    }));
    setError((prevError) => ({ ...prevError, [name]: "" }));
  };
  console.log({ formValue });

  const validateInputs = () => {
    const newErrors = {};
    const ontsag = new Date();
    if (currentStep === 0) {
      if (!formValue.firstName.trim())
        newErrors.firstName = "Нэрээ оруулна уу.";
      if (!formValue.lastName.trim()) newErrors.lastName = "Овгоо оруулна уу.";
      if (!formValue.userName.trim())
        newErrors.userName = "Хэрэглэгчийн нэрээ оруулна уу.";
    } else if (currentStep === 1) {
      if (!formValue.email.trim() || !/\S+@\S+\.\S+/.test(formValue.email))
        newErrors.email = "Мэйл хаягаа оруулна уу.";
      if (!formValue.phoneNumber.trim())
        newErrors.phoneNumber = "Утасны дугаараа оруулна уу.";
      else if (!formValue.phoneNumber.match(/^\+?\d{8}$/))
        newErrors.phoneNumber = "Утасны дугаар 8 оронтой байх ёстой.";
      if (!formValue.password.trim() || formValue.password.length < 6)
        newErrors.password = "Нууц үгээ оруулна уу";

      if (formValue.password !== formValue.confirmPassword)
        newErrors.confirmPassword = "Нууц үгээ давтаж оруулна уу.";
    } else if (currentStep === 2) {
      console.log(formValue.dateOfBirth);
      if (!formValue.dateOfBirth.trim()) {
        newErrors.dateOfBirth = "Төрсөн огноогоо оруулна уу.";
      } else if (new Date(formValue.dateOfBirth) > ontsag) {
        newErrors.dateOfBirth = "Ирээдүйд төрсөн хүн байна.";
      } else if (
        ontsag - new Date(formValue.dateOfBirth) <
        18 * 365 * 24 * 60 * 60 * 1000
      )
        newErrors.dateOfBirth = "18 нас хүрээгүй байна.";

      if (!formValue.profileImage) {
        newErrors.profileImage = "Зураг оруулна уу.";
      }
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addStep = () => {
    if (validateInputs()) {
      setCurrentStep((prev) => prev + 1);
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formValue, step: currentStep + 1 })
      );
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const CurrenComponents = [
    FirstComponent,
    SeconCOmponents,
    ThirdComponents,
    Last,
  ][currentStep];

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <CurrenComponents
            addStep={addStep}
            prevStep={prevStep}
            handleInputChange={handleInputChange}
            formValue={formValue}
            error={error}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
