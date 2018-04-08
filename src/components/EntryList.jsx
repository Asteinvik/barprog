import * as React from 'react';
import Entry from "./Entry";

class EntryList extends React.Component {

    constructor(){
        super();
        this.state = {
            crime: [],
            players:[]
        };
    }

    componentDidMount(){
        fetch('http://nflarrest.com/api/v1/team?limit=1')
            .then(results => {
                return results.json();
            })
            .then(data => {
                console.log(data);
                let team = data[0].Team;
                console.log(team)
                let crime = data.map((crimes) => {
                    return (
                        <div key={crimes.arrest_count}>
                            The worst of the worst is <b>{crimes.Team_preffered_name} </b>with an arrestcount of <b>{crimes.arrest_count}</b>
                        </div>
                    )
                })

                this.setState({crime});
                console.log(crime)
                return team;
            }).then(team=>{
                fetch('http://nflarrest.com/api/v1/team/topPlayers/' + team + '?limit=5')
                .then(results => {
                    return results.json();
                })
                .then(data => {
                    console.log(data);
                    let players = data.map((crimes) => {
                        return (
                            <tr>
                                <td>{crimes.Name}</td>
                                <td> {crimes.arrest_count}</td>
                            </tr>
                        )
                    })

                    this.setState({players});
                })
        })

    }


    createEntry(){
        return this.state.players;
    }
    createHeader(){
        return this.state.crime;
    }

    render() {
        return (

            <div className="EntryList">
                {this.createHeader()}
                <table>
                    <tr>
                        <th> Name </th>
                        <th> Arrest Count</th>
                    </tr>
                    {this.createEntry()}
                </table>
            </div>
        );
    }
}

export default EntryList;