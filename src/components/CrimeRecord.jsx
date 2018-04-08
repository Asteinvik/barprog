import * as React from 'react';

class CrimeRecord extends React.Component {

    constructor(){
        super();
        this.state = {
            players:[]
        };
    }

    componentDidMount(){
            fetch('http://nflarrest.com/api/v1/player/topCrimes/Kenny%20Britt')
            .then(results => {
                return results.json();
            })
            .then(data => {
                console.log(data);
                let crime = data.map((crimes) => {
                    return (
                        <tr>
                            <td>{crimes.category}</td>
                            <td>{crimes.arrest_count}</td>
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
                <h2>Kenny Britt</h2>
                <table>
                    <tr>
                        <th> Crime Category </th>
                        <th> Arrest Count </th>
                    </tr>
                    {this.createEntry()}
                </table>
            </div>
        );
    }
}

export default CrimeRecord;