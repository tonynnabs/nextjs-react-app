import NewMeetupForm from "./../../components/meetups/NewMeetupForm";
const NewMeetupPage = () => {
  const addMeetHandler = (data) => {
    console.log(data);
  };
  return <NewMeetupForm onAddMeetup={addMeetHandler} />;
};

export default NewMeetupPage;
