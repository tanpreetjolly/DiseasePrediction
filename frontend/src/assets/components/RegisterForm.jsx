import { useGlobalContext } from "./context";
import { TextField, Button } from "@mui/material";

const RegisterForm = () => {
  const {
    submitRegistration,
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    age,
    setAge,
    sex,
    setSex,
    medicalhistory,
    setMedicalHistory,
  } = useGlobalContext();
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col  items-center gap-2 ">
          <h2 className="text-4xl modal-heading text-center full">
            Sign Up Now!
          </h2>
          <p className="text-center full">
            Access personalized healthcare services
          </p>
        </div>
        <form onSubmit={submitRegistration} className="flex flex-col gap-3 j">
          <TextField
            id="FormBasicEmail"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            color="success"
            helperText="We'll never share your email"
            required
          />
          <TextField
            id="formBasicUsername"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            color="success"
            required
          />
          <TextField
            id="formBasicPassword"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            color="success"
            type="password"
            required
          />
          {/* <TextField
            id="age"
            label="Age"
            variant="outlined"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            color="success"
            type="number"
            required
          /> */}
          {/* <TextField
            id="sex"
            label="Enter your sex"
            variant="outlined"
            value={sex}
            onChange={(event) => setSex(event.target.value)}
            color="success"
            type="search"
            required
          /> */}
          {/* <div className="mb-3">
            <label htmlFor="medicalhistory">Medical History</label>
            <textarea
              className="form-control"
              id="medicalhistory"
              rows="3"
              placeholder="Enter medical history, separated by commas"
              value={medicalhistory.join(",")}
              onChange={(e) => setMedicalHistory(e.target.value.split(","))}
            ></textarea>
          </div> */}
          <Button variant="outlined" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
