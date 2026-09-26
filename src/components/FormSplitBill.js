import { useState } from "react";
import { Button } from "./components/Button";

export function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");
    const paidByFriend = bill ? bill - paidByUser : "";
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    function handleSubmit(e) {
        e.preventDefault();

        if (!bill || !paidByUser) return;
        onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label htmlFor="bill-value">💰 Bill value</label>
            <input
                id="bill-value"
                type="number"
                min="0"
                step="0.01"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))} />

            <label htmlFor="your-expense">🧍‍♀️ Your expense</label>
            <input
                id="your-expense"
                type="number"
                min="0"
                step="0.01"
                value={paidByUser}
                onChange={(e) => setPaidByUser(
                    Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
                )} />

            <label htmlFor="friend-expense">👫 {selectedFriend.name}'s expense</label>
            <input id="friend-expense" type="number" disabled value={paidByFriend} />

            <label htmlFor="bill-payer">🤑 Who is paying the bill</label>
            <select
                id="bill-payer"
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}
            >
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    );
}
