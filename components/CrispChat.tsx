"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("13452e74-949f-4093-964c-829e506856db");
  }, []);
  return null;
};


export default CrispChat;