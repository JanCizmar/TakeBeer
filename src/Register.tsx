import React, {useState} from 'react';
import {Button, Container, Content, Form, Input, Item, Label, Text} from "native-base";

export const Register = () => {
    const [value, setValue] = useState(undefined as string | undefined)

    return (
        <Container>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Pub name</Label>
                        <Input value={value} onChangeText={(e) => setValue(e)}/>
                    </Item>
                    <Button
                        full
                        style={{marginTop: 40, marginLeft: 10, marginRight: 10}}
                    >
                        <Text>Register</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
};
