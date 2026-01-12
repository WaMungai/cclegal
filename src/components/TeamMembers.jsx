const consultants = [
  { name: "Consultant Counsel – Corporate", email: "consultant1@cclegal.co.ke", phone: "+254 7XX XXX XXX" },
  { name: "Consultant Counsel – Technology", email: "consultant2@cclegal.co.ke", phone: "+254 7XX XXX XXX" },
  { name: "Consultant Counsel – Finance", email: "consultant3@cclegal.co.ke", phone: "+254 7XX XXX XXX" },
];

const associates = [
  { name: "Associate – Corporate", email: "associate1@cclegal.co.ke", phone: "+254 7XX XXX XXX" },
  { name: "Associate – Litigation", email: "associate2@cclegal.co.ke", phone: "+254 7XX XXX XXX" },
];

const pupil = [
  { name: "Pupil Advocate", email: "pupil@cclegal.co.ke", phone: "+254 7XX XXX XXX" },
];

const supportStaff = [
  { role: "Operations Manager" },
  { role: "Finance & Accounts" },
  { role: "Administrative Support" },
];

function TeamCard({ name, email, phone }) {
  return (
    <div className="border rounded-lg p-4 text-center relative group bg-white">
      <p className="font-medium">{name}</p>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-black text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        📧 {email} <br /> 📞 {phone}
      </div>
    </div>
  );
}

export default function TeamMembers() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-10">Our Team</h2>

      <h3 className="text-2xl font-semibold mb-6">Consultants</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {consultants.map((c, i) => <TeamCard key={i} {...c} />)}
      </div>

      <h3 className="text-2xl font-semibold mb-6">Associates</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {associates.map((a, i) => <TeamCard key={i} {...a} />)}
      </div>

      <h3 className="text-2xl font-semibold mb-6">Pupil Advocate</h3>
      <div className="grid md:grid-cols-1 gap-6 mb-10">
        {pupil.map((p, i) => <TeamCard key={i} {...p} />)}
      </div>

      <h3 className="text-2xl font-semibold mb-6">Business Support Staff</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {supportStaff.map((s, i) => (
          <div key={i} className="border rounded-lg p-4 text-center bg-gray-50">
            <p className="font-medium">{s.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
