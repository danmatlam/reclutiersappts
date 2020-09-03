import React from "react";
import { View, Text } from "react-native";
import AppLayout from "../components/common/AppLayout";
import { CandidateList } from "../components/candidates/CandidateList";

const HomeScreen = () => {
  return (
    <AppLayout>
<CandidateList/>
      
    </AppLayout>
  );
};

export default HomeScreen;