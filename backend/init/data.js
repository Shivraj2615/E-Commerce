const sampleBooks = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "Atomic Habits explains how tiny changes can lead to remarkable results over time. James Clear breaks down the science of habits and shows how they are formed and sustained. The book focuses on systems rather than goals, helping readers build lasting routines. It teaches how to break bad habits by making them unattractive and difficult. Practical examples and real-life stories make the ideas easy to apply. The concept of identity-based habits is a key takeaway. This book is ideal for personal growth and self-discipline. A must-read for anyone wanting long-term improvement.",
    price: 450,
    image:
      "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
    quantity: 35,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "The Alchemist is a philosophical novel about following your dreams and listening to your heart. It follows the journey of Santiago, a shepherd searching for his personal legend. Along the way, he learns valuable lessons about faith, destiny, and perseverance. The story emphasizes the importance of self-belief and courage. Written in simple yet poetic language, the book inspires readers deeply. It blends spirituality with real-life struggles. This timeless classic encourages readers to pursue what truly matters. A book that resonates across generations.",
    price: 299,
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    quantity: 42,
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    description:
      "Deep Work focuses on the importance of intense concentration in a distracted world. Cal Newport explains why deep, focused work is becoming increasingly valuable. The book provides practical strategies to eliminate distractions and improve productivity. It highlights how shallow work reduces long-term success. Through research and examples, the author proves the power of focus. Readers learn how to structure their workday effectively. Ideal for professionals, students, and creators. This book is a guide to mastering meaningful work.",
    price: 370,
    image: "https://m.media-amazon.com/images/I/81JJ7fyyKyS._SL1500_.jpg",
    quantity: 28,
  },
  {
    title: "Ikigai",
    author: "Francesc Miralles, Héctor García",
    description:
      "Ikigai explores the Japanese philosophy of finding purpose in life. The book reveals habits and lifestyle choices of long-living people in Okinawa. It connects passion, mission, profession, and vocation. Readers learn how small joys contribute to happiness. The book promotes mindfulness and balance. It emphasizes living in the present moment. Simple wisdom makes it easy to relate to daily life. A peaceful guide to meaningful living.",
    price: 320,
    image:
      "https://m.media-amazon.com/images/I/71lJBs5MNlL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 31,
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description:
      "Sapiens explores the entire history of humankind from ancient times to the modern age. Yuval Noah Harari explains how biology and history shaped society. The book examines culture, religion, money, and power. It questions commonly accepted beliefs about progress. The narrative blends science, philosophy, and history. Readers gain a new perspective on humanity’s evolution. Thought-provoking and insightful throughout. A must-read for curious minds.",
    price: 500,
    image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
    quantity: 22,
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    description:
      "The Power of Now teaches the importance of living in the present moment. Eckhart Tolle explains how overthinking creates stress and suffering. The book guides readers toward spiritual awakening. It encourages detachment from ego and negative thoughts. Simple teachings promote inner peace. Real-life examples make the philosophy practical. Ideal for mindfulness and mental clarity. A transformative spiritual guide.",
    price: 410,
    image:
      "https://m.media-amazon.com/images/I/61Ij8nLooNL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 26,
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    description:
      "Think and Grow Rich is a classic self-help book focused on success principles. Napoleon Hill studied successful individuals over decades. The book highlights the power of desire, faith, and persistence. It explains how mindset influences wealth creation. Practical philosophies are shared for personal achievement. Readers learn about goal setting and discipline. Though old, its ideas remain relevant. A timeless guide to success thinking.",
    price: 380,
    image: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
    quantity: 40,
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    description:
      "Can't Hurt Me is an inspiring memoir of mental toughness. David Goggins shares his journey from hardship to greatness. The book emphasizes discipline and accountability. Readers are challenged to push beyond limits. Raw storytelling makes it powerful and motivating. It focuses on overcoming pain and fear. Ideal for fitness and mindset transformation. A brutally honest source of motivation.",
    price: 490,
    image:
      "https://m.media-amazon.com/images/I/81VpFFpZTtL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 18,
  },
  {
    title: "Do Epic Shit",
    author: "Ankur Warikoo",
    description:
      "Do Epic Shit is a collection of practical life lessons. Ankur Warikoo shares insights on failure, money, and growth. The book encourages self-awareness and bold thinking. Written in a relatable and modern tone. Short sections make it easy to read. It focuses on real-life experiences. Ideal for young professionals and students. A motivating guide for modern life.",
    price: 270,
    image:
      "https://m.media-amazon.com/images/I/61kRkfsIMUL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 47,
  },
  {
    title: "Rework",
    author: "Jason Fried & David Heinemeier Hansson",
    description:
      "Rework challenges traditional business thinking and promotes simplicity. The authors argue that you don’t need long plans or huge teams to succeed. The book encourages starting small and learning by doing. It focuses on cutting unnecessary work and meetings. Real-world examples support unconventional ideas. The writing is direct and practical. Ideal for entrepreneurs and startups. A fresh perspective on modern business.",
    price: 430,
    image:
      "https://m.media-amazon.com/images/I/41FilMgZVIL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 21,
  },
  {
    title: "Hooked: How to Build Habit-Forming Products",
    author: "Nir Eyal",
    description:
      "Hooked explains how companies design products that people repeatedly use. The book introduces the Hook Model: trigger, action, reward, and investment. It explores behavioral psychology behind user engagement. Real examples from tech companies are included. Readers learn ethical product-building strategies. Ideal for developers, designers, and marketers. The book is practical and insightful. A must-read for product creators.",
    price: 395,
    image:
      "https://m.media-amazon.com/images/I/81Ox0HCg8jL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 33,
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    description:
      "This book is a profound reflection on life and suffering. Viktor Frankl shares experiences from Nazi concentration camps. He explains how purpose helps people survive hardship. The book introduces logotherapy, a form of psychotherapy. Emotional and philosophical insights are deeply moving. Readers reflect on resilience and hope. Simple yet powerful writing style. A life-changing classic.",
    price: 340,
    image:
      "https://m.media-amazon.com/images/I/81UhnGT7BvL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 19,
  },
  {
    title: "Start With Why",
    author: "Simon Sinek",
    description:
      "Start With Why explains how leaders inspire action. Simon Sinek introduces the Golden Circle concept. The book focuses on purpose-driven leadership. Real-world examples from successful organizations are shared. It emphasizes clarity and belief over manipulation. Easy-to-understand storytelling keeps it engaging. Ideal for leaders and entrepreneurs. A powerful guide to inspiration.",
    price: 410,
    image: "https://m.media-amazon.com/images/I/41iZulVq18L._SY445_SX342_.jpg",
    quantity: 37,
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    description:
      "Zero to One discusses building unique and innovative startups. Peter Thiel argues that true progress comes from originality. The book challenges competition-driven thinking. It focuses on monopolies and long-term vision. Startup philosophies are shared clearly. Readers gain insight into business strategy. Ideal for founders and innovators. Thought-provoking and bold ideas throughout.",
    price: 360,
    image: "https://m.media-amazon.com/images/I/71m-MxdJ2WL.jpg",
    quantity: 24,
  },
  {
    title: "Steal Like an Artist",
    author: "Austin Kleon",
    description:
      "Steal Like an Artist encourages creativity through influence. The book explains that nothing is completely original. It promotes sharing work and staying curious. Short chapters make it engaging and quick to read. Visual elements add creativity. Ideal for artists and creators. Encourages confidence and exploration. A fun and inspiring book.",
    price: 290,
    image:
      "https://m.media-amazon.com/images/I/81VvqDdHEFL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 44,
  },
  {
    title: "The 5 AM Club",
    author: "Robin Sharma",
    description:
      "The 5 AM Club focuses on mastering mornings for success. Robin Sharma introduces the 20/20/20 rule. The book blends storytelling with self-help lessons. It emphasizes discipline and consistency. Readers learn about productivity and balance. Motivational throughout the narrative. Ideal for habit builders. Encourages personal transformation.",
    price: 450,
    image:
      "https://m.media-amazon.com/images/I/71loUTDulKL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 29,
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    description:
      "This book offers a counterintuitive approach to happiness. Mark Manson emphasizes accepting life’s struggles. The tone is honest and humorous. It challenges toxic positivity. Readers learn about values and responsibility. Simple language makes it relatable. Focuses on meaningful living. A refreshing self-help book.",
    price: 380,
    image:
      "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
    quantity: 34,
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferriss",
    description:
      "Tools of Titans compiles advice from top performers. Tim Ferriss interviews billionaires and experts. The book covers health, wealth, and wisdom. Practical routines and tools are shared. Readers can apply lessons selectively. Massive yet valuable content. Ideal for self-optimization. A powerhouse of insights.",
    price: 610,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/book/x/n/l/tools-of-titans-original-imah9kc6fpcbsnfx.jpeg?q=70",
    quantity: 16,
  },
  {
    title: "Grit",
    author: "Angela Duckworth",
    description:
      "Grit explores the role of perseverance in success. Angela Duckworth explains why passion matters. Research-backed insights strengthen the book. Real-life examples are inspiring. It challenges talent-based thinking. Encourages long-term commitment. Ideal for students and professionals. Motivational and scientific balance.",
    price: 390,
    image:
      "https://m.media-amazon.com/images/I/71ke1gECBxL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 27,
  },
  {
    title: "Make Your Bed",
    author: "Admiral William H. McRaven",
    description:
      "Make Your Bed shares life lessons from military training. The book emphasizes discipline and small habits. Simple actions create big impact. Stories are inspiring and practical. Encourages responsibility and resilience. Easy to read and motivational. Suitable for all ages. A short yet powerful guide.",
    price: 320,
    image:
      "https://m.media-amazon.com/images/I/713oSHhIrHL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 41,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    description:
      "Rich Dad Poor Dad explains financial education basics. Robert Kiyosaki contrasts two mindsets about money. The book promotes assets over liabilities. Easy language makes finance approachable. Encourages financial independence. Focuses on long-term wealth. Popular among beginners. A foundational finance book.",
    price: 300,
    image:
      "https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 38,
  },
  {
    title: "Dopamine Detox",
    author: "Thibaut Meurisse",
    description:
      "Dopamine Detox explains how overstimulation affects focus. The book promotes reducing distractions. It encourages delayed gratification. Simple exercises are included. Ideal for improving discipline. Easy to understand concepts. Helpful for productivity improvement. A short yet effective guide.",
    price: 300,
    image: "https://m.media-amazon.com/images/I/712K3sdLlRL._SY466_.jpg",
    quantity: 23,
  },
  {
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy ",
    description:
      "This book explores the power of subconscious thinking. Joseph Murphy explains how beliefs shape reality. Affirmations and visualization techniques are shared. Encourages positive mindset development. Simple spiritual philosophy is explained. Practical examples enhance understanding. Focuses on healing and success. A classic self-help book.",
    price: 500,
    image: "https://m.media-amazon.com/images/I/61WMgOHyDaL._SY342_.jpg",
    quantity: 20,
  },
  {
    title: "Find Your Why",
    author: " Simon Sinek",
    description:
      "Find Your Why helps individuals discover purpose. Simon Sinek provides practical exercises. The book builds on Start With Why. Focuses on clarity and motivation. Ideal for teams and individuals. Simple and actionable framework. Encourages alignment with values. A purpose-driven guide.",
    image: "https://m.media-amazon.com/images/I/41lyWeCTSxL._SX342_SY445_.jpg",
    price: 400,
    quantity: 32,
  },
  {
    title: "Reset: How to Change What's Not Working ",
    author: "Dan Heath",
    description:
      "Reset focuses on fixing broken systems effectively. Dan Heath explains how to make change manageable. The book highlights small shifts with big impact. Uses real-world case studies. Encourages smarter problem-solving. Practical and realistic advice. Ideal for workplaces and teams. A thoughtful change-management book.",
    image: "https://m.media-amazon.com/images/I/61qHwXXW-PL._SY466_.jpg",
    price: 250,
    quantity: 46,
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description:
      "The Psychology of Money explores how emotions and behavior influence financial decisions. Morgan Housel explains that money success is not about intelligence alone. The book focuses on long-term thinking and patience. Real-life stories make concepts relatable. It highlights the importance of luck and risk. Readers learn why people act irrationally with money. Simple language makes it beginner-friendly. A modern classic on personal finance.",
    price: 350,
    image: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg",
    quantity: 34,
  },
  {
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    description:
      "This book tells the story of a successful lawyer seeking inner peace. Robin Sharma blends fiction with self-development lessons. The book focuses on purpose, discipline, and balance. Eastern philosophy meets modern success principles. Easy storytelling keeps readers engaged. Encourages slowing down and reflection. Ideal for mental clarity and motivation. A popular spiritual self-help novel.",
    price: 320,
    image: "https://m.media-amazon.com/images/I/61Iz2yy2CKL.jpg",
    quantity: 29,
  },
  {
    title: "Eat That Frog",
    author: "Brian Tracy",
    description:
      "Eat That Frog focuses on overcoming procrastination. Brian Tracy explains prioritization techniques for productivity. The book emphasizes tackling difficult tasks first. Short chapters make it easy to apply. Practical tools improve daily efficiency. Suitable for busy professionals. Encourages discipline and time management. A classic productivity guide.",
    price: 280,
    image:
      "https://m.media-amazon.com/images/I/41w8Eu0AhoL._SY445_SX342_FMwebp_.jpg",
    quantity: 41,
  },
  {
    title: "The Compound Effect",
    author: "Darren Hardy",
    description:
      "The Compound Effect explains how small habits create big success. Darren Hardy focuses on consistency over time. The book teaches accountability and discipline. Real-life examples reinforce the ideas. Readers learn how choices compound daily. Simple but powerful concepts are shared. Ideal for long-term growth. A motivational self-improvement book.",
    price: 360,
    image:
      "https://m.media-amazon.com/images/I/71BamqfH2dL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 26,
  },
  {
    title: "Who Moved My Cheese?",
    author: "Spencer Johnson",
    description:
      "This short book explores dealing with change. Spencer Johnson uses a simple parable format. The story teaches adaptability and acceptance. Easy language makes it universally relatable. Encourages proactive thinking. Ideal for workplace and personal change. Quick yet impactful read. A timeless motivational classic.",
    price: 240,
    image:
      "https://m.media-amazon.com/images/I/810WKcrNxBL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 48,
  },
  {
    title: "Mindset",
    author: "Carol S. Dweck",
    description:
      "Mindset explains the difference between fixed and growth mindsets. Carol Dweck shows how beliefs shape success. The book is backed by psychological research. Real-world examples strengthen understanding. Encourages learning from failure. Ideal for students and leaders. Practical and inspiring. A foundation book for personal development.",
    price: 420,
    image:
      "https://m.media-amazon.com/images/I/61G3z5f3A8L._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 31,
  },
  {
    title: "The One Thing",
    author: "Gary Keller & Jay Papasan",
    description:
      "The One Thing teaches focus and priority management. The book emphasizes doing fewer things better. Simple questions help clarify goals. Productivity myths are challenged. Readers learn to eliminate distractions. Ideal for entrepreneurs and professionals. Clear and actionable insights. A powerful focus-driven guide.",
    price: 390,
    image:
      "https://m.media-amazon.com/images/I/61aPPAPRiwL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 27,
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    description:
      "This classic book focuses on communication and relationships. Dale Carnegie explains human psychology simply. The book teaches empathy and persuasion. Timeless principles remain relevant today. Real-life examples illustrate lessons. Ideal for leadership and networking. Easy to read and apply. A must-read personal skills book.",
    price: 330,
    image:
      "https://m.media-amazon.com/images/I/71vK0WVQ4rL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 45,
  },
  {
    title: "The Courage to Be Disliked",
    author: "Ichiro Kishimi & Fumitake Koga",
    description:
      "This book explores Adlerian psychology through dialogue. It challenges the need for approval. Encourages personal freedom and responsibility. Philosophical yet easy to read. Focuses on happiness and self-acceptance. Thought-provoking conversations drive learning. Ideal for mindset change. A unique self-help perspective.",
    price: 410,
    image:
      "https://m.media-amazon.com/images/I/71Bo6Y+rWxL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 23,
  },
  {
    title: "Ikigai for Teens",
    author: "Héctor García & Francesc Miralles",
    description:
      "This book adapts the Ikigai philosophy for young readers. It focuses on purpose and passion. Encourages confidence and curiosity. Simple exercises make it interactive. Ideal for students and teens. Promotes balance and happiness. Easy language and examples. A gentle guide for early self-discovery.",
    price: 260,
    image:
      "https://m.media-amazon.com/images/I/41nS26MN37L._SY445_SX342_FMwebp_.jpg",
    quantity: 39,
  },
];
module.exports = { data: sampleBooks };
