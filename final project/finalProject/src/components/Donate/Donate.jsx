import { useEffect, useState } from "react";
import styleDonate from './Donate.module.css';

export default function Donate() {
    const [donationType, setDonationType] = useState("general");
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');
    const [selectedTree, setSelectedTree] = useState('');
    const [success, setSuccess] = useState(null);
    const [trees, setTrees] = useState([]);

    // const emailRegex = /^[A-Za-z]\w+@\w+\.\w+$/;

    useEffect(() => {
        fetch("http://localhost:7000/trees")
            .then(response => response.json())
            .then(data => {
                setTrees(data);
            })
            .catch(error => console.error("Error fetching trees:", error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        // if (!emailRegex.test(email)) {
        //     setSuccess("Please enter a valid email (e.g., example@gmail.com)");
        //     return;
        // }

        setSuccess(`Thank you for your donation of $${amount} ${donationType === 'specific' ? 'to ' + selectedTree : 'in general'}. We will contact you at ${email}.`);
        setAmount('');
        setEmail('');
        setSelectedTree('');
    };
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(null);  // Hide the success message
            }, 5000); // 5 seconds

            return () => clearTimeout(timer); // Clear the timer if the component is unmounted or success changes
        }
    }, [success]);

    return (
        <div className={styleDonate.container}>
            <h1 className={styleDonate.donateH}>Donate</h1>
            <form onSubmit={handleSubmit} className={styleDonate.form}>
                <label className={styleDonate.label}>
                    Donation Type:
                    <select 
                        value={donationType} 
                        onChange={(e) => setDonationType(e.target.value)} 
                        className={styleDonate.input}
                    >
                        <option value="general">General Donation</option>
                        <option value="specific">Specific Tree Donation</option>
                    </select>
                </label>
                <br />
                <label className={styleDonate.label}>
                    Amount:
                    <input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className={styleDonate.input}
                    />
                </label>
                <br />
                <label className={styleDonate.label}>
                    Email:
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styleDonate.input}
                    />
                </label>
                <br />
                {donationType === 'specific' && (
                    <label className={styleDonate.label}>
                        Select Tree:
                        <select
                            value={selectedTree}
                            onChange={(e) => setSelectedTree(e.target.value)}
                            required
                            className={styleDonate.input}
                        >
                            <option value="">Select a tree</option>
                            {trees.map((tree) => (
                                <option key={tree.id} value={tree.name}>{tree.name}</option>
                            ))}
                        </select>
                    </label>
                )}
                <br />
                <button type="submit" className={styleDonate.button}>Donate</button>
                {success && <div className={styleDonate.success}>{success}</div>}
            </form>
        </div>
    );
}
