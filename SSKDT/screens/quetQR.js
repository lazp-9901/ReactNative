import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

function quetQR(){
    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> This is QR scan</Text>
    </View>
    )
}
export default quetQR;
