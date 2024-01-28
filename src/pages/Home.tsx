import Container from "../components/layout/Container";
import SideBar from "../components/layout/SideBar";
import GreetingText from "../components/ui/GreetingText";
import HabitsBox from "../components/layout/HabitsBox";
import HourHabitBox from "../components/layout/HourHabitBox";

function Home() {
  return (
    <>
      <SideBar />
      <Container>
        <div className="text-start ml-5">
          <GreetingText />
        </div>
        <div className="grid grid-cols-3 ">
          <div className="col-span-3 p-5 gap-4 inline-flex">
            {" "}
            <HabitsBox
              habit={"23"}
              percentage="43%"
              coloredText="Good"
              defaultText=" habits done in january"
            />
            <HabitsBox
              habit={"19"}
              percentage="89%"
              coloredText="Bad"
              defaultText=" habits avoided in january"
            />
            <HourHabitBox
              habit={"86h"}
              percentage="14%"
              coloredText="your health "
              defaultText="Total hours dedicated to "
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
