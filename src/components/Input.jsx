import { InStock } from "./InStock";

export const Input = (props) => {
    const {matters,onChangeMatter,onClickAdd,inStockMatters} = props;
    return(
        <>
            <div className="input-area">
                <input
                    value={matters}
                    placeholder="案件名を入力"
                    onChange={onChangeMatter}
                    disabled={inStockMatters.length >= 5}
                />
                <button onClick={onClickAdd} disabled={inStockMatters.length >= 5}>追加</button>
            </div>
                {inStockMatters.length >= 5 && <p>入荷の上限に達しました</p>}
        </>
    )
}