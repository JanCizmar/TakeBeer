import React, {FunctionComponent} from 'react';
import {List, ListItem, Text} from "native-base";
import {Page} from "../App";

export const Menu: FunctionComponent<{
    onPageChange: (page: Page) => void
}> = (props) => {
    return (
        <List>
            <ListItem button onPress={() => props.onPageChange("register")}>
                <Text>Register New pub</Text>
            </ListItem>
        </List>
    );
};
