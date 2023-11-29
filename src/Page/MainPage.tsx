import {Menu, Rating, Skeleton} from "@mantine/core";
import {useState} from "react";
import {Button, Popover, Text} from "@mantine/core";

export function MainPage() {

    const [loading, setLoading] = useState(true);
    return (
        <div>

            <h1>Welcome</h1>

            <h2>Rating of our website</h2>
            <Rating defaultValue={3.75} fractions={4} readOnly/>

            <h2>Your Rating</h2>
            <Rating defaultValue={2.5} fractions={4}/>



            <Skeleton visible={loading}>Hello world</Skeleton>

            <Button onClick={() => setLoading((l) => !l)}>
                Click?
            </Button>


            <Menu>
                <Menu.Target>
                    <Button>Toggle menu</Button>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Label></Menu.Label>
                    <Menu.Item>
                        Note 6
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>


            <Popover width={200} position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <Button>Info</Button>
                </Popover.Target>
                <Popover.Dropdown>
                    <Text size="xs">Webseite klar eine 10/10</Text>
                </Popover.Dropdown>
            </Popover>
        </div>
    )
}