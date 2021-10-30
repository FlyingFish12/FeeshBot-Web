import { Flex, Kbd } from "@chakra-ui/layout";
import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import BaseLayout from "../components/BaseLayout";

const TableElement = ({ command, description, aliases }) => {

    return (
        <Tr>
            <Td><Kbd>F?{command}</Kbd></Td>
            <Td>{description}</Td>
            <Td wordBreak="break-all">{aliases.map(alias => <Kbd key={alias}>F?{alias}</Kbd>)}</Td>
        </Tr>
    )
}

export default function Commands() {

    return (
        <BaseLayout pageTitle={"Commands"}>
            <Flex alignItems="center" m={5} border="2px solid #131315" boxShadow="xl">
                <Table variant="simple" bg="#1a202c">
                    <Thead>
                        <Tr>
                            <Th>Command</Th>
                            <Th>Description</Th>
                            <Th>Aliases</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        <TableElement command={"Trivia"} description={"Say F?Trivia to get a random trivia question!In Trivia, you get a random question and you have 10 seconds to answer it. You must answer with the answer number it is instead of the written answer or you won't get it right."} aliases={['Triv', 'Quiz', 'trv']}/>

                        <TableElement command={"Coinflip"} description={"Play this game of luck, and guess whether the answer will be heads or tails!"} aliases={['Hot', 'Cf', 'Headsortails', 'Flip', 'Coin']}/>

                        <TableElement command="Lovemeter" description="Use the bot to find the love between you and another member." aliases={['Love', 'L']} />

                        <TableElement command="Topic" description="Chat activity going down? Use this command to get some random topics for you and your members to chat about!" aliases={['Tpc', 'Topics']} />

                        <TableElement command="Fact" description="Sends some random facts into the channel. There are many different categories to choose from so be sure to check out Fact Commands" aliases={['Facts', 'Fct']} />

                        <TableElement command="Ban" description="Use this to ban bad users. You can add a reason for the ban but its optional so you can choose." aliases={['B']} />

                        <TableElement command="Kick" description="This command is used to kick bad users. It's like a ban except the member you kicked can join back at any time." aliases={['K']} />

                        <TableElement command="Purge" description="Use this command to mass delete messages. The maximum amount of messages deleted at a time is 100." aliases={['Clear', 'P', 'Pur']} />

                        {/* New */}
                        <TableElement command="Avatar" description="Use this command to get the avatar of a specific member." aliases={['Av']} />

                        <TableElement command="Botinfo" description="This command gives you the information of FeeshBot." aliases={['Bi', 'Info']} />

                        <TableElement command="Serverinfo" description="Gets you some information about the server you use it in." aliases={['Server', 'Svr', 'Si', 'Guild', 'Guildinfo']} />

                        <TableElement command="Whois" description="This command gives you the information about a mentioned member in the server." aliases={['Ui', 'Userinfo']} />
                        
                        <TableElement command="Vote" description="Gives some links so you can vote for Feesh on Top.gg or DiscordBotList.com" aliases={['V', 'Votes']} />

                        <TableElement command="Support" description="Sends a link to the support server." aliases={['Error', 'Bugs']} />

                        <TableElement command="Suggestion" description="Finds a channel in the server called suggestions and sends the suggestion" aliases={['Suggestions', 'Suggest', 'Suggests']} />

                        <TableElement command="Invite" description="Sends the link for you to invite FeeshBot to other servers" aliases={['Botinvite']} />

                        <TableElement command="Status" description="Use this command to get the server count and uptime count for the bot." aliases={['Stats', 'Uptime']} />

                        {/* New */}

                        <TableElement command="Animalfact" description="Sends a random fact about animals" aliases={['Animal', 'Animalfacts', 'Af']} />

                        <TableElement command="Sportfact" description="Sends some random facts about sport into the channel" aliases={['Sport', 'Sportfacts', 'Sf']} />

                        <TableElement command="Worldfact" description="Gets some random facts about the world" aliases={['World', 'Worldfacts', 'Wf']} />

                        <TableElement command="Recordfact" description="Sends some random facts into the channel" aliases={['Record', 'Worldrecord', 'Worldrecords', 'Recordfacts', 'Rf']} />

                    </Tbody>
                </Table>
            </Flex>
        </BaseLayout>
    )

}