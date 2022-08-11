const emailConfirmHTML = (user) => `<h1>Email Confirmation</h1>
<h2>Hello ${user.name}</h2>
<p>Thank you for registering. Please confirm your email by clicking on the following link</p>
<a href=http://localhost:8081/confirm/${user.emailConfirmationCode}> Click here</a>
</div>`;

module.exports = emailConfirmHTML;
