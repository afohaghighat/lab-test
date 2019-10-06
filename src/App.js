import React from "react";
import { Container } from "@material-ui/core";
import http from "./services/httpService";
import VerticalTabs from "./common/tabPanel";

class App extends React.Component {
	state = { data: [], chartWidth: 600, chartHeight: 200 };

	async componentDidMount() {
		try {
			let res = await http.get("http://localhost:7000/data");
			this.setState({
				data: res.data
			});
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const { data, chartHeight, chartWidth } = this.state;
		return (
			<>
				<Container>
					<VerticalTabs
						data={data}
						chartWidth={chartWidth}
						chartHeight={chartHeight}
						style={{ border: "1px solid red" }}
					/>
				</Container>
			</>
		);
	}
}

export default App;
