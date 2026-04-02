import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (req, res) => {
    const { name, email, projectType, message } = req.body;

    try {
        await resend.emails.send({
            from: "RaceCode <onboarding@resend.dev>",
            to: "racecode.solutions@gmail.com",
            subject: `New Contact Form Submission from ${name}`,
            html: `
            <h2>New Contact Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Message:</strong><br/> ${message}</p>
            `
        });

        res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to send message." });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});