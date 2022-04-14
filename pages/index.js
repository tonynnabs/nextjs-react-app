import MeetupList from "./../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "The first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    address: "Some address 5, 12345 Some City",
    description:
      "Reiciendis platea quas! Modi accusantium aliquid sequi sem laoreet suscipit. Qui, expedita error, fuga repudiandae? In! Cumque vitae pede harum.",
  },
  {
    id: "m2",
    title: "The second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    address: "Some address 6, 12345 Some City",
    description:
      "Reiciendis platea quas! Modi accusantium aliquid sequi sem laoreet suscipit. Qui, expedita error, fuga repudiandae? In! Cumque vitae pede harum.",
  },
];
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};
export async function getStaticProps(){
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}
export default HomePage;
