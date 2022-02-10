export const Shipping = (props) => {
    const {shippings,onClickCompleteShippings,onClickBackShipping} = props;
    return(
        <div className="shipping-area">
			<h1>出荷済</h1>
			<ul className="shipping-list">
				{shippings.map((matter, index) => {
					return (
						<div key={matter} className="list-row">
							<li>{matter}</li>
							<button onClick={() => onClickCompleteShippings(index)}>
								完了
							</button>
							<button onClick={() => onClickBackShipping(index)}>
								戻る
							</button>
						</div>
					);
				})}
			</ul>
		</div>
    )
}