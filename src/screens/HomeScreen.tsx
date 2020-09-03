import React from "react";
import { View, Text } from "react-native";
import AppLayout from "../components/common/AppLayout";
import { CandidateList } from "../components/candidates/CandidateList";
import { PopUp } from "../components/common/PopUp";

const HomeScreen = () => {
  return (
    <AppLayout>
      <PopUp/>
<CandidateList/>
      
    </AppLayout>
  );
};

export default HomeScreen;