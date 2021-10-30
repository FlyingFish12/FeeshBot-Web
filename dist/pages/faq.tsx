import { Accordion, AccordionButton, AccordionIcon, AccordionItem } from "@chakra-ui/accordion";
import { Box, Link } from "@chakra-ui/layout";
import { AccordionPanel } from "@chakra-ui/react";
import BaseLayout from "../components/BaseLayout";

export default function FAQ() {

    return (
        <BaseLayout pageTitle={"FAQ"}>
        
        <Accordion bg="#1a202c" allowMultiple allowToggle>
            <AccordionItem>
                <AccordionButton>
                    Why is FeeshBot down?
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                {"Feesh is hosted on Heroku, and im poor, so if it's down just let me know and I'll sort it out!"}
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                Why do some commands not work?
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                {"If it doesn't work and you know it should, just tell me and I'll try to fix it."}
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                What do you get when playing games like trivia or coinflip?
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                {"At the moment, you don't get anything. However, I am currently working on some currency and point systems that I will hopefully introduce to FeeshBot soon!"}
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                Any other questions?
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                just hop over to the <Link href="https://discord.gg/TJUFyfdc9b" color="#da0059">Support Server</Link>!
                </AccordionPanel>
            </AccordionItem>
        </Accordion>

        </BaseLayout>
    )
}