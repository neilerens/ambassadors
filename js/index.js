$(document).ready(function(){


    var options = {
      valueNames: [ 'name', 'year', 'school', 'major', 'profilePic' ],
      item: 'user-item'
    };

    var values = [
      {
        name: 'Monica Rex',
        position: 'Director of Events & Logistics',
        year: 2016,
        school: 'WSE, Krieger',
        major: 'Biomedical Engineering, Spanish',
        summary: 'something',
        profilePic: 'img/monica.rex.png',
        code: 'A Team',
        summary: 'Monica is the leader of a biomedical engineering design team and also serves as co-chair for the Student Engagement Committee of the Alumni Council. She is a member of Stepping Stone Ministry, and she volunteers for Safe House of Hope, a non-profit that fights human sex-trafficking in Baltimore. Monica studied abroad in Madrid during the Spring of 2015.'
      },
      {
        name: 'Neil Rens',
        year: 2016,
        position: 'Director of Recruitment & Development',
        school: 'WSE',
        major: 'Biomedical Engineering',
        code: 'A Team',
        summary: 'Neil was heavily involved with Aezon, the Hopkins XPRIZE team. Now, he leads a biomedical engineering design team and serves as a PILOT Core Leader. Neil is president of the Hopkins Medical Device Network and helped co-found MedHacks. He is also a member of HERO, Encore Music, and the premed honor society Alpha Epsilon Delta.',
        profilePic: 'img/neil.rens.jpg'
      },
      {
        name: 'Dannielle Brown',
        year: 2016,
        position: 'Director of Internal Affairs',
        school: 'Krieger',
        major: 'Public Health',
        profilePic: 'img/danni.brown.jpeg',
        summary: 'Dannielle is a Public Health Studies major on the Pre-Med track. She is a second year resident advisor, the director of internal affairs for Alumni Student Ambassadors, and the president of the Xi Tau Chapter of Alpha Kappa Alpha Sorority, Inc. Dannielle has recently studied abroad in Cape Town, South Africa where she worked with children affected by HIV/AIDS. While here in Baltimore, Dannielle is currently writing her senior honors thesis, and serves as a mentor at the US Dream Academy with children who suffer from parental incarceration.'
      },
      {
        name: 'James Shepherdson',
        position: 'Executive Director',
        year: 2016,
        school: 'Krieger',
        major: 'Molecular and Cellular Biology',
        profilePic: 'img/james.shepherdson.jpg',
        summary: 'James is a Molecular and Cellular Biology major and Computer Science minor. He tutors Baltimore City elementary school students with the JHU Tutorial Project, leads a peer tutoring group for Calculus III as part of the PILOT learning program, works as a student staffer at the Digital Media Center, gives admissions interviews as an Admissions Representative, and performs independent research in the Wendland lab. He plans to apply to MD/PhD programs after graduating in the spring.'
      },
      {
        name: 'Anjani Patel',
        year: 2017,
        position: 'Director of Philanthropy Education',
        school: 'WSE, Krieger',
        major: 'Applied Math & Statistics, Economics',
        profilePic: 'img/anjani.patel.jpg',
        summary: 'Anjani is an Applied Mathematics and Statistics & Economics double major and Entrepreneurship & Management minor from Washington state. In addition to being a member of the Alumni Student Ambassadors, Anjani is a Resident Advisor, Course Assistant in the Center for Leadership Education, a PILOT Leader, and the Step Up Chair.'
      },
      {
        name: 'Danait Yemane',
        year: 2017,
        school: 'Krieger',
        major: 'Public Health',
        summary: 'Danait is a public health studies major and french cultural studies minor passionate about global affairs and traveling. She intends to pursue a career in global health or health policy in the future. This year, Danait traveled to Uganda and Mali to conduct public health research and will be pursuing a comparative studies community health program in India, South Africa and Brazil in the spring. On campus, Danait is the co-president for the Hopkins Eritrean and Ethiopian Society (HEES), an executive board member for the Women’s Initiative for Social Equity (WISE), and a member of the Johns Hopkins Underrepresented in the Medical Professions (JUMP) club.',
        profilePic: 'img/danait.yemane.png'
      },
      {
        name: 'Matthew Brown',
        year: 2017,
        school: 'Krieger',
        major: 'Public Health',
        summary: 'Matthew is a Public Health Major on the Pre-Med track. Matthew is a Residential Advisor and also serves as the President of the Black Student Union as well a Senator for the Student Government Association. Matthew is also a member of the Hopkins Honeybees Club as well as the Blue Key Society.',
        profilePic: 'img/matthew.brown.jpg'
      },
      {
        name: 'Christine Kumar',
        year: 2016,
        school: 'Krieger',
        major: 'Political Science, Economics',
        summary: 'Christine is a senior majoring in Political Science and Economics. She is the Student Director of the Johns Hopkins Tutorial Project, an Advisory Board member of WISE (Women’s Initiative for Social Equity), Pi Beta Phi, and the Student Ambassador Board (SAB) for the Center for Social Concern.',
        profilePic: 'img/christine.kumar.png'
      },
      {
        name: 'Elizabeth Glass',
        year: 2017,
        school: 'Krieger',
        major: 'History of Art',
        summary: 'Elizabeth is a History of Art major and a Museums and Society minor. Elizabeth currently serves as the Vice President (COO) of her sorority, Kappa Alpha Theta. On the Homewood campus, Elizabeth is a member of Blue Key Society as well as Admissions Representatives. Elizabeth is a Study Consultant and an intern at the Walters Art Museum.',
        profilePic: 'img/elizabeth.glass.png'
      },
      {
        name: 'Haley Schweizer',
        year: 2017,
        school: 'Krieger',
        major: 'Psychology',
        summary: 'Haley is a Psychology major on the Physician’s Assistant track. Haley is a member of the Varsity Women’s lacrosse team as well being a member of the Student Athletic Advisory Commitee, Fellowship of Christian Athletes, Leadership Consulting Group at Hopkins, and One Love peer facilitation group. In her spare time, Haley helps with Baltimore City Lacrosse and Leadership where she mentors young aspiring middle school aged girls from inner city Baltimore, as well as volunteers at Union Memorial Hospital.',
        profilePic: 'img/haley.schweizer.jpg'
      },
      {
        name: 'Simon Marshall-Shah',
        year: 2016,
        school: 'Krieger',
        major: 'Public Health, Cognitive Science',
        summary: 'Simon is a Public Health Studies and Cognitive Science double major. In addition to ASA, he is a canoeing leader in Outdoor Pursuits, and leads trips for undergraduate and graduate students on the Homewood campus. He is also the Treasurer of AIDS Alliance (a Center for Social Concern group), a member of the consulting team for Senior Leadership Consultants, an Admission Representative, and is an intern at Fusion Partnerships, Inc., which is a fiscal sponsor in Baltimore City. Simon also has a WJHU radio show called "Amusic Bouche"!',
        profilePic: 'img/simon.marshall-shah.png'
      },
      {
        name: 'Pankhuri Jha',
        year: 2017,
        school: 'Krieger',
        major: 'Neuroscience',
        summary: 'Pankhuri is a junior Neuroscience major on the Pre-Med track. She performs research at the Johns Hopkins medical campus in degenerative muscular disorders, serves as a case manager at Charm City Clinic in downtown Baltimore, is a student ambassador for the Student Advocacy Board on behalf of the Center for Social Concern (CSC) and is the current Recruitment Chair for Alpha Epsilon Delta, the pre-medical honor society on campus. Pankhuri hopes to attend medical school after graduation.',
        profilePic: 'img/pankhuri.jha.png'
      },
      {
        name: 'Olivia Gebhardt',
        year: 2018,
        school: 'WSE, Krieger',
        major: 'Applied Math and Statistics, Physics',
        summary: 'Olivia is a double major in Physics and Applied Mathematics & Statistics. She plans to attend Business School after graduation. Olivia is a member of Kappa Kappa Gamma, the JHU Consulting Club, the Society of Physics Students, and a tour guide for the Blue Key Society. She also works for Professor Robert Leheny in his liquid crystal lab doing microfluidic research and hopes to have her work published soon.',
        profilePic: 'img/olivia.gebhardt.png'
      },
      {
        name: 'Ritchie Assini',
        year: 2017,
        school: 'Krieger',
        major: 'Sociology',
        summary: 'Ritchie is a Sociology major, minoring in Marketing Communications and Entrepreneurship and Management. She is planning to study marketing after graduation. Ritchie serves as a Teaching Assistant for Leadership Theory in the Center for Leadership Education Department and is also a member of the American Marketing Association. Ritchie played on the Varsity Women’s Lacrosse team for two years, before suffering a career ending injury, however she is now a commentator for the games.',
        profilePic: 'img/ritchie.assini.png'
      },
      {
        name: 'David Hamburger',
        year: 2018,
        school: 'Krieger',
        major: 'International Studies',
        summary: 'David is an International Studies major from Baltimore with an interest in security studies and diplomatic history. In addition to serving as an Alumni Student Ambassador, he is a Woodrow Wilson Research Fellow, is proud to work with the JHU Politik as Maryland Editor, and is involved with the International Studies Leadership Committee.',
        profilePic: 'img/david.hamburger.png'
      },
      {
        name: 'Sydney Baker',
        year: 2018,
        school: 'Krieger',
        major: 'History, History of Art',
        summary: 'Sydney is a History and History of Art double major from Orlando, Florida. She works at the Homewood House Museum and is a member of Phi Mu and Step Up.',
        profilePic: 'img/sydney.baker.jpg'
      },
      {
        name: 'Giselle Lai',
        year: 2016,
        school: 'Krieger',
        major: 'History, Public Health',
        summary: "Giselle is a History and Public Health Studies double-major. She is a member of the Pi Beta Phi Women's Fraternity and of PEEPs, the peer health educator group under the Center for Health Education and Wellness. On campus, Giselle works as a study consultant for the Office of the Academic Advising and as an assistant at the Homewood House Museum.",
        profilePic: 'img/giselle.lai.jpg'
      },
      {
        name: 'Victoria Roberts',
        year: 2018,
        school: 'Krieger',
        major: 'Molecular and Cellular Biology',
        summary: 'Victoria is a sophomore Molecular and Cellular Biology major and French Literature minor on the Pre-Med track. Victoria plays flute and piccolo in the Hopkins Symphony Orchestra and is a volunteer music teacher for elementary school kids in Baltimore. She is also a member of Alpha Phi and the Encore Music program.',
        profilePic: 'img/victoria.roberts.png'
      },
      {
        name: 'Luca Pinelli',
        year: 2018,
        school: 'Krieger',
        major: 'International Studies',
        summary: 'Luca is an International Studies major and Italian minor. Luca is a member of the Johns Hopkins club Soccer and Squash teams as well as Delta Phi and the Nichol’s House Committee.',
        profilePic: 'img/luca.pinelli.png'
      },
      {
        name: 'Caitlin Romanczyk',
        year: 2017,
        school: 'WSE',
        major: 'Biomedical Engineering',
        summary: 'Caitlin is a Biomedical Engineering major from New Jersey with a strong interest in designing medical devices. She serves as the Professional Development Chair for Theta Tau and tutors students in math and physics. She also enjoys photography and dance, and is one of the co-founders of Slainte, JHU’s Irish Dance Team.',
        profilePic: 'img/caitlin.romanczyk.jpg'
      },
      {
        name: 'Sarah Benett',
        year: 2016,
        school: 'Krieger',
        major: 'Public Health',
        summary: 'Sarah is a Public Health major on the Pre-Med track. Sarah is a member of the Varsity Women’s soccer team as well as Alpha Phi, the Blue Key Society, and serves as an Admissions Representative at Homewood. Sarah is the Public Relations chair for Global Health Brigades, serves as an intern at Hillel, and is involved in a community outreach program that focuses on Asthma in the Baltimore community.',
        profilePic: 'img/sarah.benett.png'
      },
      {
        name: 'Sarah Zappone',
        year: 2018,
        school: 'WSE',
        major: 'Computer Science',
        summary: "Sarah is a sophomore on SGA majoring in Computer Science. She’s called TX, CT, IN, NJ, KY, and PA home, but these days you’ll 99% find her at the farmer's market, Carma’s, running, cooking, or in line at Char Mar. Despite her apparent lack of athletic physique, on weekends she’ll be hitting the athletic fields, in a pretty sweet get-up which happens to resemble a giant blue bird. Fun Fact: Sarah makes amazing sushi.",
        profilePic: 'img/sarah.zappone.png'
      },
      {
        name: 'Brian Lo',
        year: 2016,
        school: 'Krieger',
        major: 'Molecular and Cellular Biology',
        summary: 'Brian is a current senior majoring in Molecular and Cellular Biology with a minor in psychology. He studied abroad at Oxford University in their department of molecular biochemistry during his Junior year and is currently on the pre-med track. Outside of the classroom, Brian is involved with research at the medical campus, works with admissions as an Admissions Representative and as a member of the Student Admissions Advisory Board, and is also involved with Alpha Epsilon Delta, the pre-medical honours society.',
        profilePic: 'img/brian.lo.png'
      },
      {
        name: 'Hudson Van Slooten',
        year: 2016,
        school: 'WSE',
        major: 'Chemical and Biomolecular Engineering',
        summary: 'Hudson is a Chemical Biomolecular Engineering major with a minor in Psychology and Brain Sciences. Hudson is a member of the Varsity Women’s cross country and track and field teams. She is also a Group Management intern for the Center for Social Concern on campus and sits on their student advocacy board. She is an active member of Thread. In addition to being involved with ASA, Hudson also sits on the board of Step Up and Senior Class Gift.',
        profilePic: 'img/hudson.vanslooten.png'
      },
      {
        name: 'Akin Sogunro',
        year: 2018,
        school: 'Krieger',
        major: 'Molecular and Cellular Biology',
        summary: 'Akin is a Molecular and Cellular Biology major on the Pre-Med track. Akin plays viola and performs at campus events in a string quartet. Akin also is conducting cancer research at the Johns Hopkins medical campus.',
        profilePic: 'img/akin.sogunro.png'
      },
      {
        name: 'Ryan Carroll',
        year: 2017,
        school: 'Krieger',
        major: 'Political Science, History',
        summary: 'Ryan is enrolled as a double major in history and political science. He is a member of the Blue Key Society, Mock Trial, the JHU Model U.N. Conference, and serves as an Admissions Representative. Ryan works for the Office of Residential Life as an RA and, aside from ASA, also works in Alumni Relations as a member of the Reunion and Homecoming Office.',
        profilePic: 'img/ryan.carroll.png'
      },
      {
        name: 'Colette Aroh',
        year: 2018,
        school: '',
        major: '',
        summary: '',
        profilePic: 'img/colette.aroh.png'
      },
      {
        name: 'Bridget Hampton',
        year: 2017,
        school: 'Krieger',
        major: 'Public Health',
        summary: "Bridget is a Public Health major and Marketing and Communications minor. She is the 5th member in her family to attend Johns Hopkins. Her father, Chris Hampton is a graduate of '83, and brothers Chris Jr. '13, Patick '14, Gerard '15 attended Hopkins as well. Bridget is a member of the Varsity Field Hockey Team, and particpates in a variety of clubs including Thread and JHU JUMP. She loves Baltimore and especially likes spending time in Fells!",
        profilePic: 'img/bridget.hampton.jpeg'
      },
      {
        name: 'Sam Kornblau',
        year: 2017,
        school: 'Krieger',
        major: 'Economics',
        summary: '',
        profilePic: 'img/sam.kornblau.png'
      },
      {
        name: 'Milonee Mehta',
        year: 2017,
        school: 'WSE',
        major: 'Chemical and Biomolecular Engineering',
        summary: '',
        profilePic: 'img/milonee.mehta.png'
      },
      {
        name: 'Kush Gupta',
        year: 2017,
        school: 'WSE',
        major: 'Biomedical Engineering',
        summary: '',
        profilePic: 'img/kush.gupta.jpg'
      },
      {
        name: 'Isabelle Kim',
        year: 2017,
        school: 'Krieger',
        major: 'Public Health',
        summary: '',
        profilePic: 'img/isabelle.kim.png'
      },
      {
        name: 'Lingga Adidharma',
        year: 2017,
        school: 'WSE',
        major: 'Biomedical Engineering',
        summary: 'My name is Lingga and I am a junior majoring in biomedical engineering and am on the pre-med track. Outside of class, I volunteer at Charm City Clinic and tutor at ASEPP. I am co-founder and president of Indonesian-Malaysian Student Association and am also involved in a global engineering innovation team that went to Laos this past summer.',
        profilePic: 'img/lingga.adidharma.jpg'
      },
      {
        name: 'Libby Ford',
        year: 2017,
        school: 'Krieger',
        major: 'French',
        summary: '',
        profilePic: 'img/libby.ford.png'
      },
      {
        name: 'Angela Roller',
        year: 2016,
        school: 'WSE',
        major: 'Computer Science',
        summary: '',
        profilePic: 'img/angela.roller.png'
      }
    ];

    var userList = new List('user-list', options, values);
    //
    //userList.add({
    //  name: "Gustaf Lindqvist",
    //  born: 1983
    //});

    

    $('.more_info').click(function() {
        $('.more_info').removeClass('active')
        $(this).toggleClass('active');
    });
});