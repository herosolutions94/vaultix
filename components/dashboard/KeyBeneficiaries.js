import Link from "next/link";

const beneficiaries = [
  {
    id: 1,
    name: 'Jane Doe',
    relation: 'Spouse',
    assets: 12,
    initials: 'JD',
    image: '/images/dashboard/ben2.svg',
    confirmed: true,
  },
  {
    id: 2,
    name: 'Jane Doe',
    relation: 'Child',
    assets: 8,
    initials: 'JD',
    image: '/images/dashboard/ben1.svg',
    confirmed: true,
  },
  {
    id: 3,
    name: 'Jane Doe',
    relation: 'Child',
    assets: 8,
    initials: 'JD',
    image: '/images/dashboard/ben1.svg',
    confirmed: true,
  },
  {
    id: 4,
    name: 'Jane Doe',
    relation: 'Child',
    assets: 8,
    initials: 'JD',
    image: '/images/dashboard/ben1.svg',
    confirmed: true,
  },
];

export default function KeyBeneficiaries() {
  return (
    <div className="benefSection">
      <div className="dash_sec_header">
        <h3 className="recentTitle dash_title">Key Beneficiaries</h3>
        <Link href="/dashboard/beneficiaries" className="viewAllBtn">VIEW ALL BENEFICIARIES</Link>
      </div>

      <div className="benefRow">
        {beneficiaries.map((person) => (
          <div key={person.id} className="benefCard">
            <div
              className="benefAvatar"
            >
              <img src={person.image} alt={person.name} />
            </div>

            <div className="benefInfo">
              <p className="benefName">{person.name}</p>
              <p className="benefMeta">
                {person.relation} • {person.assets} assets
              </p>
            </div>

            <div className="benefCheckIcon">
              <img src="/images/dashboard/green-check.svg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
