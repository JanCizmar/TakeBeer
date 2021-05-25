import {Body, Button, Container, Content, Header, Icon, Left, Right, Title} from 'native-base';
import React, {useState} from 'react';
import {Register} from "./src/Register";
import {Menu} from "./src/Menu";
import {Initial} from "./src/Initial";

export type Page = "menu" | "register" | "initial"

export default function App() {
    const [page, setPage] = useState("initial" as Page)
    const [pageBeforeMenu, setPageBeforeMenu] = useState("initial" as Page)

    const onPageChange = (newPage: Page) => {
        if (newPage === "menu") {
            setPageBeforeMenu(page)
        }
        setPage(newPage)
    }

    return (
        <Container>
            <Header>
                <Left>
                    {page !== "menu" ?
                        <Button transparent onPress={() => onPageChange("menu")}>
                            <Icon name='menu'/>
                        </Button>
                        :
                        <Button transparent onPress={() => onPageChange(pageBeforeMenu)}>
                            <Icon name='arrow-back'/>
                        </Button>
                    }
                </Left>
                <Body>
                    <Title>TakeBeer</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
                {page == "register" &&
                <Register/>
                }

                {page == "menu" &&
                <Menu onPageChange={onPageChange}/>
                }

                {page == "initial" &&
                <Initial onPageChange={onPageChange}/>
                }
            </Content>
        </Container>
    );
}
