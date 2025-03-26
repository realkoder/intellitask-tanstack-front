import SeatSizeSelector from "../../ui/seat-size-selector";


type OrgDetailsProps = {
  seatSize: string;
  setSeatSize: (seatSize: string) => void;
};

const OrgDetails = ({ seatSize, setSeatSize }: OrgDetailsProps) => {

  const seatSizeOptions = [
    {
      id: "small",
      label: "Small Team",
      description: "Up to 10 seats, perfect for startups and small teams",
      icon: "small" as const,
    },
    {
      id: "medium",
      label: "Medium Organization",
      description: "11-50 seats, ideal for growing companies",
      icon: "medium" as const,
    },
    {
      id: "large",
      label: "Enterprise",
      description: "51+ seats, designed for large organizations",
      icon: "large" as const,
    },
  ]

  const handleSeatSizeSelect = (optionId: string) => {
    setSeatSize(optionId)
  }

  return (
    <div className="w-1/5">
      <SeatSizeSelector options={seatSizeOptions} onSelect={handleSeatSizeSelect} seatSize={seatSize}/>
    </div>
  );
}
export default OrgDetails;
