import "./App.css";
import { useState } from "react";
import { Input } from "./components/Input";
import { InStock } from "./components/InStock";
import { Manufacturing } from "./components/Manufacturing";
import { Shipping } from "./components/Shipping";

export default function App() {
	const [matters, setMatters] = useState("");
	const [inStockMatters, setInStockMatters] = useState([]);
	const [manufacturings, setManufacturings] = useState([]);
	const [shippings, setShippings] = useState([]);

	const onChangeMatter = (e) => setMatters(e.target.value);

	const onClickAdd = () => {
		if (matters === "") return;
		const newMatters = [...inStockMatters, matters];
		setInStockMatters(newMatters);
		setMatters("");
	};

	const onClickStockDeleteMatter = (index) => {
		const newStockDeleteMatter = [...inStockMatters];
		newStockDeleteMatter.splice(index, 1);
		setInStockMatters(newStockDeleteMatter);
	};

	const onClickCompleteMatter = (index) => {
		const newStockCompleteMatter = [...inStockMatters];
		newStockCompleteMatter.splice(index, 1);
		setInStockMatters(newStockCompleteMatter);
		const newManufacturings = [...manufacturings, inStockMatters[index]];
		setManufacturings(newManufacturings);
	};

	const onClickDeleteManufacturing = (index) => {
		const newManufacturingDeleteMatter = [...manufacturings];
		newManufacturingDeleteMatter.splice(index, 1);
		setManufacturings(newManufacturingDeleteMatter);
	};

	const onClickCompleteManufacturing = (index) => {
		const newCompleteManufacturing = [...manufacturings];
		newCompleteManufacturing.splice(index, 1);
		setManufacturings(newCompleteManufacturing);
		const newShippings = [...shippings, manufacturings[index]];
		setShippings(newShippings);
	};

	const onClickBackManufacturings = (index) => {
		const newBackManufacturings = [...manufacturings];
		newBackManufacturings.splice(index, 1);
		setManufacturings(newBackManufacturings);
		const newBackInStocks = [...inStockMatters, manufacturings[index]];
		setInStockMatters(newBackInStocks);
	};

	const onClickBackShipping = (index) => {
		const newClickBackShipping = [...shippings];
		newClickBackShipping.splice(index, 1);
		setShippings(newClickBackShipping);
		const newBackManufacturing = [...manufacturings, shippings[index]];
		setManufacturings(newBackManufacturing);
	};

	const onClickCompleteShippings = (index) => {
		const completeShippings = [...shippings];
		completeShippings.splice(index, 1);
		setShippings(completeShippings);
	};

	return (
		<div className="App">
			<Input
				matters={matters}
				onChangeMatter={onChangeMatter}
				onClickAdd={onClickAdd}
				inStockMatters={inStockMatters}
			/>
			<div className="container">
				<InStock
					inStockMatters={inStockMatters}
					onClickCompleteMatter={onClickCompleteMatter}
					onClickStockDeleteMatter={onClickStockDeleteMatter}
				/>
				<Manufacturing
					manufacturings={manufacturings}
					onClickCompleteManufacturing={onClickCompleteManufacturing}
					onClickBackManufacturings={onClickBackManufacturings}
					onClickDeleteManufacturing={onClickDeleteManufacturing}
				/>
				<Shipping
					shippings={shippings}
					onClickCompleteShippings={onClickCompleteShippings}
					onClickBackShipping={onClickBackShipping}
				/>
			</div>
		</div>
	);
}
