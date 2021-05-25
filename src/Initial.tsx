import React, {FunctionComponent} from 'react';
import {Button, Text} from "native-base";
import {Page} from "../App";

export const Initial: FunctionComponent<{
    onPageChange: (page: Page) => void
}> = (props) => {
    return (
        <>
            <Button onPress={() => props.onPageChange("register")}>
                <Text>Register new pub.</Text>
            </Button>
        </>
    );
};
