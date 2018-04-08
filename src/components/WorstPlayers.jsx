import * as React from 'react';

class WorstPlayers extends React.Component {

    constructor(){
        super();
        this.state = {
            players:[]
        };
    }

    componentDidMount(){
        fetch('http://nflarrest.com/api/v1/player?limit=5')
            .then(results => {
                return results.json();
            })
            .then(data => {
                console.log(data);
                let crime = data.map((crimes) => {
                    return (
                                <tr>
                                    <td>{crimes.Name}</td>
                                    <td>{crimes.Team_name} </td>
                                    <td> {crimes.arrest_count}</td>
                                </tr>
                    )
                })
                this.setState({players:crime});
                console.log(crime)
            })
    }

    createEntry(){
        return this.state.players;
    }

    render() {
        return (
            <div className="EntryList">
                <table>
                    <tr>
                        <th> Name </th>
                        <th> Team </th>
                        <th> Arrest Count</th>
                    </tr>
                {this.createEntry()}
                </table>
            </div>
        );
    }
}

export default WorstPlayers;