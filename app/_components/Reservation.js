import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  //   const settings = await getSettings();
  //   const bookedDates = await getBookedDatesByCabinId(params.cabinId);

  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  console.log(session);

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      {session ? (
        <>
          <DateSelector
            bookedDates={bookedDates}
            settings={settings}
            cabin={cabin}
          />
          <ReservationForm cabin={cabin} session={session} />
        </>
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
