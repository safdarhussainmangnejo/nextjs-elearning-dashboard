import Badge from '@mui/material/Badge';
export const headerDetailsData = {
  title: "Mentor Bonus by User Name",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo",
  bonusType: "LoA Unconditional",
  date: "23 November 2023",
  buttonText: "Ops Team Repair",
  imageUrl: "/path/to/your/image.png", // Replace with actual image path
};

export const mentorAttendanceHeaderDetailsData = {
  title: "Attendance List by User Mentor",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo",
  bonusType: "LoA Unconditional",
  date: "23 November 2023",
  buttonText: "Ops Team Repair",
  imageUrl: "/path/to/your/image.png", // Replace with actual image path
};

export const detailCardData = 
  {
    title: "Keterangan",
    menteeName: "Nama User",
    bonusType: "LoA Unconditional",
    scholarshipName: "LPDP",
    universityDesignation: "MIT",
    startYear: "2024",
    mentoringMonth: "Oktober",
    attachments: "Read.pdf",
  };

  export const mentorAttendanceData = [

];

export const columnsMentorAttendance = [
  { id: 'no', label: 'No', minWidth: 50 },
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'classCode', label: 'Class Code', minWidth: 100 },
  { id: 'participantName', label: "Participant's Name", minWidth: 150 },
  { id: 'session', label: 'Session', minWidth: 50 },
  { id: 'sessionStartTime', label: 'Session Start Time', minWidth: 100 },
  { id: 'media', label: 'Media', minWidth: 100 },
  { id: 'duration', label: 'Duration', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 }
];
// format: (value: any) => <Badge color="secondary"> {value} </Badge>
export const rowsMentorAttendance = [
  { no: 1, date: '03 Mar 2023', classCode: 'Nama User', participantName: 'LoA Unconditional', session: 2, sessionStartTime: '14:00 WIB', media: 'Whatsapp', duration: '30 Menit', status: 'Diterima', attachments: [{ name: "Payslips_20 Aug.pdf" }]  },
  { no: 2, date: '03 Mar 2023', classCode: 'Nama User', participantName: 'LoA Unconditional', session: 2, sessionStartTime: '14:00 WIB', media: 'Whatsapp', duration: '30 Menit', status: 'Diproses', attachments: [{ name: "Payslips_20 Aug.pdf" }] },
  { no: 3, date: '03 Mar 2023', classCode: 'Nama User', participantName: 'LoA Unconditional', session: 2, sessionStartTime: '14:00 WIB', media: 'Whatsapp', duration: '30 Menit', status: 'Diterima', attachments: [{ name: "Payslips_20 Aug.pdf" }] },
  { no: 4, date: '03 Mar 2023', classCode: 'Nama User', participantName: 'LoA Unconditional', session: 2, sessionStartTime: '14:00 WIB', media: 'Whatsapp', duration: '30 Menit', status: 'Ditolak', attachments: [{ name: "Payslips_20 Aug.pdf" }] },
  { no: 5, date: '03 Mar 2023', classCode: 'Nama User', participantName: 'Fully Funded', session: 2, sessionStartTime: '14:00 WIB', media: 'Google Meet', duration: '30 Menit', status: 'Diterima', attachments: [{ name: "Payslips_20 Aug.pdf" }] },
  { no: 6, date: '03 Mar 2023', classCode: 'Nama User', participantName: 'Fully Funded', session: 2, sessionStartTime: '14:00 WIB', media: 'Google Meet', duration: '30 Menit', status: 'Diproses', attachments: [{ name: "Payslips_20 Aug.pdf" }] },
  { no: 7, date: '03 Mar 2023', classCode: 'Nama User', participantName: 'Fully Funded', session: 2, sessionStartTime: '14:00 WIB', media: 'Google Meet', duration: '30 Menit', status: 'Diterima', attachments: [{ name: "Payslips_20 Aug.pdf" }] },
  { no: 8, date: '03 Mar 2023', classCode: 'Nama User', participantName: 'Fully Funded', session: 2, sessionStartTime: '14:00 WIB', media: 'Google Meet', duration: '30 Menit', status: 'Diterima', attachments: [{ name: "Payslips_20 Aug.pdf" }] },
];
