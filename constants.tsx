
import { WeekPlan } from './types';

export const SYLLABUS_DATA: WeekPlan[] = [
  {
    id: 1,
    title: { en: "The Music of English: Vowel Mastery", zh: "英语之乐：元音大师" },
    description: { 
      en: "English is a musical language, and vowels are the melody! Imagine a song with only drums and no singer—that’s what English would be like without vowels. Every word you speak needs a vowel to give it a voice and a heartbeat. Think of vowels as the 'soul' of speech.\n\n" +
          "The Musical Parts:\n" +
          "1. Pure Vowels: These are steady and strong sounds. Like a single, clear note played on a piano.\n" +
          "2. Diphthongs: These are 'gliding' sounds. One sound slides smoothly into another, like a fun slide on a playground!\n" +
          "3. The Lazy Schwa: The most famous sound in English! It’s short, relaxed, and helps English keep its fast rhythm.\n\n" +
          "See it in Action!\n" +
          "Think of the word 'Cake'. Without that long 'a' sound, the word disappears! Vowels make the word 'pop'.\n\n" +
          "Why the Melody Matters:\n" +
          "Mastering vowels is the secret to sounding natural. It’s the difference between speaking like a robot and speaking like a storyteller!",
      zh: "英语是一种充满音乐感的语言，而元音就是旋律！想象一下一首歌只有鼓点没有歌手——没有元音的英语就是那个样子。你说的每一个词都需要元音来赋予它声音和心跳。把元音想象成语言的“灵魂”。\n\n" +
          "音乐组成部分：\n" +
          "1. 单元音：这些是稳定而强有力的声音。就像钢琴上弹奏出的单个清晰音符。\n" +
          "2. 双元音：这些是“滑动”的声音。一个声音平滑地滑向另一个声音，就像操场上好玩的滑梯！\n" +
          "3. 懒人元音 (Schwa)：英语中最出名的发音！它短促、放松，帮助英语保持明快的节奏。\n\n" +
          "看一看：\n" +
          "想想 'Cake' 这个词。如果没有那个长长的 'a' 音，这个词就消失了！元音让单词变得生动。\n\n" +
          "为什么旋律重要：\n" +
          "掌握元音是听起来自然地道的秘诀。这是“像机器人说话”和“像讲故事的人说话”之间的区别！"
    },
    topics: [
      {
        name: { en: "Short vs. Long Vowels", zh: "长短元音辨析" },
        content: { en: "Length matters! Changing the length of a vowel can change the whole word. Think of 'sheep' vs. 'ship'.", zh: "长度很重要！改变元音的长度会改变整个单词。比如“sheep”（绵羊）和“ship”（轮船）。" },
        examples: [
          { sentence: "The sheep is on the ship.", translation: "绵羊在轮船上。", explanation: "Contrast /iː/ and /ɪ/." }
        ]
      },
      {
        name: { en: "The 'Lazy' Schwa /ə/", zh: "中性元音 Schwa" },
        content: { en: "The Schwa is the most common sound in English! It's very short and relaxed. It sounds like a soft 'uh'.", zh: "Schwa 是英语中最常见的发音！它非常短促且放松，听起来像轻微的“呃”。" },
        examples: [
          { sentence: "A-bout a pan-da.", translation: "关于一只熊猫。", explanation: "The 'a' in 'about' and 'a' in 'panda' are both Schwas." }
        ]
      }
    ],
    exercises: [
      {
        title: "Vowel Length Challenge",
        text: "A [long] vowel like in 'cake' is different from a [short] vowel in 'cat'. The word 'sheep' uses a [long] sound.",
        answers: ["long", "short", "long"],
        hints: [
          "Hint: 'Cake' uses the name of the letter 'A', making it long.",
          "Hint: 'Cat' is a quick, sharp sound.",
          "Hint: Say 'eeeeee' like a smiling sheep!"
        ]
      },
      {
        title: "The Schwa Hunt",
        text: "In the word 'banana', the first and last letters are usually pronounced as a [schwa]. It is the most [common] sound in English.",
        answers: ["schwa", "common"],
        hints: [
          "Hint: Think of the lazy 'uh' sound.",
          "Hint: Because English is fast, this sound appears everywhere!"
        ]
      },
      {
        title: "Diphthong Slides",
        text: "When we say [diphthongs], our mouth must [move] from one sound to another. Example: the 'oy' in [boy].",
        answers: ["diphthongs", "move", "boy"],
        hints: [
          "Hint: This means 'two sounds' together.",
          "Hint: Your lips shouldn't stay still!",
          "Hint: The sound slides from 'o' to 'i'."
        ]
      }
    ]
  },
  {
    id: 2,
    title: { en: "The Skeleton: Consonants & Blends", zh: "语言骨架：辅音与组合音" },
    description: { 
      en: "If vowels are the music, consonants are the skeleton! They give words their shape and structure. Without consonants, all our words would sound like a messy soup of sounds. They act like the solid walls of your word-house.\n\n" +
          "The Structural Parts:\n" +
          "1. Stops and Pops: Sounds like 'P' and 'B' that burst out of your mouth like tiny fireworks.\n" +
          "2. Smooth Flows: Sounds like 'M' and 'N' that hum through your nose.\n" +
          "3. The Tricky TH: A special 'hiss' that you make by gently biting your tongue.\n\n" +
          "See it in Action!\n" +
          "Try to say 'Book' without the 'B' or 'k'. You just get 'oo'. The consonants 'B' and 'k' are the bookends that hold the word together.\n\n" +
          "Why the Skeleton Matters:\n" +
          "Clear consonants make you easy to understand. They act like the sharp lines in a drawing that make everything clear and crisp.",
      zh: "如果元音是音乐，辅音就是骨架！它们赋予单词形状和结构。没有辅音，我们所有的单词听起来都会像是一锅混乱的声音汤。它们就像你单词之家的坚实墙壁。\n\n" +
          "结构组成部分：\n" +
          "1. 爆破音：像 'P' 和 'B' 这样的声音，像微型烟花一样从嘴里迸发出来。\n" +
          "2. 平滑音：像 'M' 和 'N' 这样通过鼻子哼出的声音。\n" +
          "3. 神奇的 TH：一种通过轻轻咬住舌头产生的特殊“嘶嘶声”。\n\n" +
          "看一看：\n" +
          "试着在没有 'B' 或 'k' 的情况下说 'Book'。你只会得到 'oo'。辅音 'B' 和 'k' 就像书架两端的支架，把单词固定在一起。\n\n" +
          "为什么骨架重要：\n" +
          "清晰的辅音让你容易被理解。它们就像图画中锐利的线条，让一切变得清晰明了。"
    },
    topics: [],
    exercises: [
      {
        title: "Stop and Pop!",
        text: "The sounds /p/ and /b/ are called [plosives]. They feel like a tiny [explosion] in your mouth.",
        answers: ["plosives", "explosion"],
        hints: [
          "Hint: Air is blocked and then 'exploded' out.",
          "Hint: Think of a balloon bursting."
        ]
      },
      {
        title: "Nasal Humming",
        text: "When you say [nasal] sounds like 'M' or 'N', air comes out of your [nose].",
        answers: ["nasal", "nose"],
        hints: [
          "Hint: These sounds use your smelling organ!",
          "Hint: Try pinching your nostrils while saying 'mmm'."
        ]
      },
      {
        title: "The TH Secret",
        text: "To make the 'TH' sound, you must place your tongue between your [teeth]. It can be [noisy] or quiet.",
        answers: ["teeth", "noisy"],
        hints: [
          "Hint: Use your front white 'biters'!",
          "Hint: Some TH sounds (like 'this') use your voice box."
        ]
      }
    ]
  },
  {
    id: 3,
    title: { en: "Fluent Flow: Rhythm & Connected Speech", zh: "流利表达：节奏与连读" },
    description: { 
      en: "English isn't just spoken; it's performed! Speaking English is like dancing to a beat. It has a special rhythm where some words are strong and others are soft. We call this 'Connected Speech' because words link together like a chain.\n\n" +
          "The Rhythmic Parts:\n" +
          "1. Syllables: The beats of the word. Clapping your hands helps you count them!\n" +
          "2. Word Linking: When words 'hug' each other. The end of one word slides into the start of the next.\n" +
          "3. Sentence Stress: Making the important words (like names and actions) stand out.\n\n" +
          "See it in Action!\n" +
          "Say 'An apple'. You don't stop between them. It sounds like 'A-napple'. This link makes your speech smooth like water flowing in a river.\n\n" +
          "Why the Flow Matters:\n" +
          "Understanding rhythm helps you listen better. Once you know the beat, you won’t get lost when people speak fast!",
      zh: "英语不仅仅是说出来的，它是演出来的！说英语就像随着节奏跳舞。它有一种特殊的节奏，有些词很强，有些词很弱。我们称之为“连读”，因为单词像链条一样连在一起。\n\n" +
          "节奏组成部分：\n" +
          "1. 音节：单词的节拍。拍手可以帮你数出它们！\n" +
          "2. 单词连读：当单词互相“拥抱”时。一个词的结尾滑入下一个词的开头。\n" +
          "3. 句子重音：让重要的词（如名字和动作）脱颖而出。\n\n" +
          "看一看：\n" +
          "说 'An apple'。你不会在它们之间停顿。听起来像 'A-napple'。这种连读让你的表达像河水一样顺滑。\n\n" +
          "为什么流畅度重要：\n" +
          "理解节奏能帮你听得更清楚。一旦你掌握了节拍，当别人说话很快时，你就不会感到困惑了！"
    },
    topics: [],
    exercises: [
      {
        title: "Clap the Beats",
        text: "A word like 'computer' has [three] syllables. The stress is on the [second] one.",
        answers: ["three", "second"],
        hints: [
          "Hint: Count the beats: com-pu-ter.",
          "Hint: We say com-PU-ter, not COM-puter."
        ]
      },
      {
        title: "Linking Chains",
        text: "We [link] words together when a consonant meets a [vowel]. 'Stand up' sounds like [Standup].",
        answers: ["link", "vowel", "Standup"],
        hints: [
          "Hint: This means joining two things together.",
          "Hint: Linking happens before A, E, I, O, or U.",
          "Hint: Join the two words into one sound."
        ]
      },
      {
        title: "Heavy and Light",
        text: "English is a [stress]-timed language. We重读 [important] words like nouns and verbs.",
        answers: ["stress", "important"],
        hints: [
          "Hint: The extra 'punch' we give a word.",
          "Hint: Words that carry the actual meaning."
        ]
      }
    ]
  },
  {
    id: 4,
    title: { en: "Naming & Quantifying: Nouns & Articles", zh: "命名与量化：名词与冠词" },
    description: { 
      en: "Imagine a world without names. You couldn't ask for a 'cookie' or talk about your 'dog'! Nouns are the stickers we put on everything in our universe! They are the labels for people, places, and things.\n\n" +
          "The Naming Parts:\n" +
          "1. Common vs. Proper: General things (city) versus special, unique names (Beijing).\n" +
          "2. Countable vs. Uncountable: Things we can count one-by-one (apples) versus things that are like a big group (water, sugar).\n" +
          "3. Articles: Tiny pointers ('A', 'An', 'The') that tell us which thing we mean.\n\n" +
          "See it in Action!\n" +
          "Compare 'a dog' with 'the dog'. 'A' means any dog, but 'the' means a specific dog you already know! Articles help us be precise.\n\n" +
          "Why the Names Matter:\n" +
          "Using the right noun helps you paint a clear picture. Articles are the small 'steering wheels' that guide the listener to exactly what you mean.",
      zh: "想象一个没有名字的世界。你无法要一块“饼干”，也无法谈论你的“狗”！名词就是我们为宇宙万物贴上的标签！它们是人、地点和事物的名字。\n\n" +
          "命名组成部分：\n" +
          "1. 普通与专有：普通事物（城市）与特殊名字（北京）。\n" +
          "2. 可数与不可数：可以数的东西（苹果）与一大团的东西（水）。\n" +
          "3. 冠词：像 'A', 'An', 'The' 这样的小指针，告诉我们指的是哪一个。\n\n" +
          "看一看：\n" +
          "比较 'a dog' 和 'the dog'。'A' 指任何一只狗，而 'the' 指你认识的那只！冠词帮我们表达精确。\n\n" +
          "为什么命名重要：\n" +
          "使用正确的名词能帮你想出清晰的画面。冠词就像小小的“方向盘”，引导听者。"
    },
    topics: [],
    exercises: [
      {
        title: "Special Names",
        text: "Names of people like 'Jack' are [Proper] nouns. They always need a [Capital] letter.",
        answers: ["Proper", "Capital"],
        hints: [
          "Hint: Opposite of 'Common'.",
          "Hint: A big letter at the start."
        ]
      },
      {
        title: "How Much/Many?",
        text: "We use '[many]' for countable items like books, but '[much]' for uncountable items like milk.",
        answers: ["many", "much"],
        hints: [
          "Hint: Use for 1, 2, 3... items.",
          "Hint: Use for things you can't count individually."
        ]
      },
      {
        title: "Pointer Words",
        text: "Use '[an]' before a word like 'apple'. Use '[the]' when talking about a [specific] thing we both know.",
        answers: ["an", "the", "specific"],
        hints: [
          "Hint: Used before vowel sounds.",
          "Hint: The definite article.",
          "Hint: A particular, known item."
        ]
      }
    ]
  },
  {
    id: 5,
    title: { en: "Actions & States: The World of Verbs", zh: "动作与状态：动词大世界" },
    description: { 
      en: "Verbs are the engine of your sentence. Without a verb, your sentence is parked and going nowhere! They tell us about actions, feelings, and even just the state of 'being'.\n\n" +
          "The Active Parts:\n" +
          "1. Action Verbs: The 'zooming' words like run, jump, and shout.\n" +
          "2. State Verbs: The 'quiet' words that describe feelings (love) or knowledge (know).\n" +
          "3. Linking Verbs: The 'bridge' words like 'is' or 'becomes' that connect a person to a description.\n\n" +
          "See it in Action!\n" +
          "Compare 'I run' with 'I am a runner'. In the first, 'run' is an action engine. In the second, 'am' is a linking bridge. Both are vital verbs!\n\n" +
          "Why the Engine Matters:\n" +
          "Choosing the right verb makes your writing powerful. Instead of saying 'He went', you can say 'He sprinted'. The verb is where the magic happens!",
      zh: "动词是句子的引擎。没有动词，你的句子就像停在那里的车，哪儿也去不了！它们告诉我们动作、感觉，甚至仅仅是“存在”的状态。\n\n" +
          "活跃组成部分：\n" +
          "1. 动作动词：“飞驰”的词，比如跑、跳、喊。\n" +
          "2. 状态动词：“安静”的词，描述感觉（爱）或知识（知道）。\n" +
          "3. 连系动词：“桥梁”词，比如 'is' 或 'becomes'，将人与描述连接起来。\n\n" +
          "看一看：\n" +
          "比较 'I run' 和 'I am a runner'。在第一个句子中，'run' 是动作引擎。在第二个句子中，'am' 是连接桥梁。它们都是至关重要的动词！\n\n" +
          "为什么引擎重要：\n" +
          "选择正确的动词能让你的写作更有力。与其说 'He went'（他去了），你可以说 'He sprinted'（他冲了过去）。动词就是奇迹发生的地方！"
    },
    topics: [],
    exercises: [
      {
        title: "The Quiet Verbs",
        text: "A verb like 'know' or 'love' is a [state] verb. They do not usually use the [-ing] form.",
        answers: ["state", "-ing"],
        hints: [
          "Hint: Describes a condition, not a movement.",
          "Hint: The ending for continuous actions."
        ]
      },
      {
        title: "Target Practice",
        text: "In the sentence 'He kicked the ball', 'kicked' is a [transitive] verb because it has an [object].",
        answers: ["transitive", "object"],
        hints: [
          "Hint: This verb 'transfers' action to a target.",
          "Hint: The receiver of the action."
        ]
      },
      {
        title: "The Equal Sign",
        text: "Verbs like 'is', 'smells', or 'seems' are called [linking] verbs because they connect a [subject] to a description.",
        answers: ["linking", "subject"],
        hints: [
          "Hint: Acts like a bridge.",
          "Hint: The star of the sentence."
        ]
      }
    ]
  },
  {
    id: 6,
    title: { en: "Details & Order: Adjectives & Adverbs", zh: "细节与顺序：形容词与副词" },
    description: { 
      en: "If nouns and verbs are the bones and engine, adjectives and adverbs are the paint and decorations! They turn a boring sentence into a colorful picture. They help us describe exactly 'how' and 'what kind'.\n\n" +
          "The Decorative Parts:\n" +
          "1. Adjective Order: Did you know English has a secret order for adjectives? You can't just put them anywhere!\n" +
          "2. Degrees of Comparison: Better, Faster, Stronger. This helps us compare one thing to another.\n" +
          "3. Adverbs of Degree: Words like 'very' or 'too' that tell us how much energy an adjective has.\n\n" +
          "See it in Action!\n" +
          "Compare 'A car' with 'A fast, shiny red car'. The second one paints a much better picture in your head. Adjectives add flavor!\n\n" +
          "Why the Decoration Matters:\n" +
          "Adjectives and adverbs help you share your feelings. They let your friends know if the cake was 'good' or 'absolutely amazing'!",
      zh: "如果名词和动词是骨架和引擎，形容词和副词就是油漆和装饰！它们把枯燥的句子变成彩色的图画。它们帮我们准确地描述“如何”以及“什么样的”。\n\n" +
          "装饰组成部分：\n" +
          "1. 形容词顺序：你知道吗？英语里形容词有秘密的排列顺序，你不能随便乱放！\n" +
          "2. 比较等级：更好、更快、更强。这帮我们把一件事物与另一件事物进行比较。\n" +
          "3. 程度副词：像 'very' 或 'too' 这样的词，告诉我们一个形容词含有多少能量。\n\n" +
          "看一看：\n" +
          "比较 'A car' 和 'A fast, shiny red car'。第二个句子在你脑海中描绘出了更棒的画面。形容词增加了色彩！\n\n" +
          "为什么装饰重要：\n" +
          "形容词和副词能帮你分享感受。它们能让你的朋友知道那块蛋糕是“好的”还是“简直太棒了”！"
    },
    topics: [],
    exercises: [
      {
        title: "The Secret Order",
        text: "We say 'a big red ball' because [size] comes before [color].",
        answers: ["size", "color"],
        hints: [
          "Hint: Big, small, tall...",
          "Hint: Red, blue, green..."
        ]
      },
      {
        title: "Better or Best?",
        text: "The comparative form of 'bad' is '[worse]'. The #1 in a group is the [superlative] degree.",
        answers: ["worse", "superlative"],
        hints: [
          "Hint: An irregular comparison.",
          "Hint: The 'highest' level."
        ]
      },
      {
        title: "Intensity Check",
        text: "Adverbs like '[very]' or 'extremely' tell us the [degree] of an adjective.",
        answers: ["very", "degree"],
        hints: [
          "Hint: A common 4-letter word for emphasis.",
          "Hint: The 'amount' of an adjective."
        ]
      }
    ]
  },
  {
    id: 7,
    title: { en: "Prepositions & Linking: The Social Words", zh: "介词与连接：社交性词汇" },
    description: { 
      en: "Words need glue to stay together! Prepositions and Conjunctions are the 'glue' and 'map' of our sentences. They help us understand where things are, when they happen, and how ideas are connected.\n\n" +
          "The Linking Parts:\n" +
          "1. Prepositions of Time: These act like a calendar (In, On, At).\n" +
          "2. Prepositions of Movement: These act like a GPS (Into, Across, Through).\n" +
          "3. Conjunctions: These act like bridges (Because, If, So) that explain 'why' things happen.\n\n" +
          "See it in Action!\n" +
          "Think of 'The cat is on the mat' versus 'The cat is under the mat'. One tiny word completely changes the story! Prepositions provide the map.\n\n" +
          "Why the Glue Matters:\n" +
          "Without these words, our sentences would just be a list of items. Glue words help us build complex, logical thoughts.",
      zh: "单词需要胶水才能呆在一起！介词和连词就是我们句子的“胶水”和“地图”。它们帮我们理解事物在哪里、什么时候发生，以及各种想法是如何连接的。\n\n" +
          "连接组成部分：\n" +
          "1. 时间介词：这些就像日历（In, On, At）。\n" +
          "2. 动作介词：这些就像 GPS（Into, Across, Through）。\n" +
          "3. 连词：这些就像桥梁（Because, If, So），解释事情“为什么”发生。\n\n" +
          "看一看：\n" +
          "想想 'The cat is on the mat'（猫在垫子上）和 'The cat is under the mat'（猫在垫子下）。一个小词完全改变了故事！介词提供了地图。\n\n" +
          "为什么胶水重要：\n" +
          "没有这些词，我们的句子就只是一堆物品清单。胶水词帮我们建立复杂且有逻辑的思想。"
    },
    topics: [],
    exercises: [
      {
        title: "Clock & Calendar",
        text: "Use '[at]' for a specific time like 5:00. Use '[on]' for days like Monday.",
        answers: ["at", "on"],
        hints: [
          "Hint: For a exact point in time.",
          "Hint: For specific days or dates."
        ]
      },
      {
        title: "Movement GPS",
        text: "If you move from outside to inside, you go '[into]' the room. To cross a street, you go [across].",
        answers: ["into", "across"],
        hints: [
          "Hint: Combines 'in' and 'to'.",
          "Hint: From one side to the other."
        ]
      },
      {
        title: "Logical Glue",
        text: "The word '[because]' shows a reason. The word '[if]' is used to show a condition.",
        answers: ["because", "if"],
        hints: [
          "Hint: Answers the 'Why'.",
          "Hint: Used for possibilities."
        ]
      }
    ]
  },
  {
    id: 8,
    title: { en: "Sentence Patterns: The Blueprint", zh: "句型结构：蓝图" },
    description: { 
      en: "Building a sentence is a lot like building a house or playing with LEGO blocks. You need a solid skeleton to keep everything standing! In English, almost every sentence follows a simple secret formula that helps us share our ideas clearly.\n\n" +
          "The Big Three: S-V-O\n" +
          "To make a complete sentence, we usually need three main parts:\n" +
          "1. Subject (The Who): This is the star of the show! It’s the person, animal, or thing doing something.\n" +
          "2. Verb (The Action): This is the heartbeat of the sentence. It tells us what is happening (like run, eat, or is).\n" +
          "3. Object (The What): This receives the action. It tells us more about what the Subject is interacting with.\n\n" +
          "See it in Action!\n" +
          "Look at this simple sentence: 'The cat (Subject) eats (Verb) the fish (Object).'\n" +
          "Without the Subject, we don't know who is hungry. Without the Verb, nothing happens! And without the Object, we don't know what the cat is busy doing.\n\n" +
          "Why the Skeleton Matters:\n" +
          "Think of these parts as the 'bones' of your writing. Once you have your skeleton (Subject + Verb), you can dress it up with 'muscles' and 'clothes'—like adjectives (colors and sizes) or adverbs (how fast things happen).\n\n" +
          "But remember: Always start with your Subject and Verb to make sure your sentence is strong and healthy!",
      zh: "构建句子就像盖房子或玩乐高积木。你需要一个坚实的骨架来支撑一切！在英语中，几乎每个句子都遵循一个简单的秘密公式，帮我们清晰地分享想法。\n\n" +
          "三大支柱：S-V-O\n" +
          "要组成一个完整的句子，我们通常需要三个主要部分：\n" +
          "1. 主语（谁）：节目的明星！做动作的人、动物或事物。\n" +
          "2. 动词（动作）：句子的心跳。告诉我们发生了什么（比如跑、吃或“是”）。\n" +
          "3. 宾语（什么）：动作的承受者。告诉我们主语在与什么互动。\n\n" +
          "看一看：\n" +
          "看看这个简单的句子：'The cat (主语) eats (动词) the fish (宾语)'。\n" +
          "没有主语，我们不知道谁饿了。没有动词，什么都不会发生！没有宾语，我们不知道那只猫在忙什么。\n\n" +
          "为什么骨架重要：\n" +
          "把这些部分想象成写作的“骨头”。一旦你有了骨架（主语+动词），你就可以用形容词（颜色和大小）或副词（动作发生的快慢）等“肌肉”和“衣服”来装饰它。\n\n" +
          "但请记住：始终从主语和动词开始，确保你的句子健康强壮！"
    },
    topics: [],
    exercises: [
      {
        title: "S-V-O Skeleton",
        text: "The star of the show is the [Subject]. The heartbeat is the [Verb]. The receiver is the [Object].",
        answers: ["Subject", "Verb", "Object"],
        hints: [
          "Hint: The 'doer'.",
          "Hint: The action.",
          "Hint: The receiver."
        ]
      },
      {
        title: "Direct/Indirect",
        text: "In the sentence 'I gave him a pen', 'him' is the [indirect] object and 'pen' is the [direct] object.",
        answers: ["indirect", "direct"],
        hints: [
          "Hint: The person who gets the item.",
          "Hint: The actual item given."
        ]
      },
      {
        title: "The Transformer",
        text: "To make a question for 'he/she/it', we start with '[Does]'. The main verb must be in its [base] form.",
        answers: ["Does", "base"],
        hints: [
          "Hint: Helping verb for singular subjects.",
          "Hint: The simplest form of the verb."
        ]
      }
    ]
  },
  {
    id: 9,
    title: { en: "Tales of the Past: Simple & Continuous", zh: "往事回顾：一般过去与过去进行" },
    description: { 
      en: "The Past Tense is our time machine! It allows us to travel back and share stories of things already finished. Whether it was a second ago or a year ago, the past tense helps us describe history.\n\n" +
          "The Time-Travel Parts:\n" +
          "1. Regular Past: These are the easy travelers that just add '-ed' to the end (walked, talked).\n" +
          "2. Irregular Past: The 'wild' ones that change completely (go -> went, see -> saw).\n" +
          "3. The Interruption: Using Past Continuous to describe a long background story that gets interrupted by a quick event.\n\n" +
          "See it in Action!\n" +
          "Compare 'I ate' with 'I was eating'. 'I ate' is a quick snapshot. 'I was eating' is like a movie playing in the past.\n\n" +
          "Why the Time Machine Matters:\n" +
          "Sharing your memories and telling stories is how we connect with others. The past tense is the key to all your favorite books and movies!",
      zh: "过去时就是我们的时光机！它能让我们回到过去，分享已经完成的事情。无论是发生在一秒钟前还是千年前，过去时都能帮我们描述历史。\n\n" +
          "时光旅行组成部分：\n" +
          "1. 规则过去式：简单的旅行者，只需在结尾加 '-ed'（walked, talked）。\n" +
          "2. 不规则过去式：“狂野”的词，会完全改变（go -> went, see -> saw）。\n" +
          "3. 中断模式：用过去进行时描述一个长的背景故事，被一个快速发生的事件打断。\n\n" +
          "看一看：\n" +
          "比较 'I ate'（我吃了）和 'I was eating'（我当时正在吃）。'I ate' 是一个快照，而 'I was eating' 就像一部在过去播放的电影。\n\n" +
          "为什么时光机重要：\n" +
          "分享记忆和讲故事是我们与他人联系的方式。过去时是理解你所有最爱书籍和电影的关键！"
    },
    topics: [],
    exercises: [
      {
        title: "Wild Verbs",
        text: "The past of 'go' is '[went]'. The past of 'eat' is '[ate]'. These are [irregular] verbs.",
        answers: ["went", "ate", "irregular"],
        hints: [
          "Hint: Past of go.",
          "Hint: Sounds like 8.",
          "Hint: Verbs that don't follow -ed rules."
        ]
      },
      {
        title: "ED Sounds",
        text: "The word 'walked' ends with the sound [/t/]. The word 'wanted' ends with the sound [/ɪd/].",
        answers: ["/t/", "/ɪd/"],
        hints: [
          "Hint: Sounds like a quick tap.",
          "Hint: Adds an extra syllable."
        ]
      },
      {
        title: "The Interruption",
        text: "I [was] reading when the cat [jumped]. This uses Past [Continuous] and Past Simple.",
        answers: ["was", "jumped", "Continuous"],
        hints: [
          "Hint: Past of 'am'.",
          "Hint: Quick finished action.",
          "Hint: The '-ing' past tense."
        ]
      }
    ]
  },
  {
    id: 10,
    title: { en: "Experience & Time: Present Perfect", zh: "经验与时间：现在完成时" },
    description: { 
      en: "The Present Perfect is a bridge between 'then' and 'now'. It’s not just about what you did; it’s about your life journey! It connects your past experiences to who you are today.\n\n" +
          "The Bridge Parts:\n" +
          "1. Life Experience: Talking about things you have done without saying exactly when (I have visited London).\n" +
          "2. Since vs. For: Measuring time from a starting point (Since 2010) or for a period (For 10 years).\n" +
          "3. Just, Already, Yet: Special signals that tell us how fresh or expected an event is.\n\n" +
          "See it in Action!\n" +
          "Compare 'I lost my keys' with 'I have lost my keys'. In the second one, you are still looking for them! It links the past loss to the present trouble.\n\n" +
          "Why the Bridge Matters:\n" +
          "This tense makes you sound like an expert communicator. It’s perfect for interviews, making friends, and sharing your amazing achievements!",
      zh: "现在完成时是“过去”和“现在”之间的桥梁。它不仅仅关乎你做了什么，还关乎你的人生旅程！它把你过去的经历和你今天的样子联系在一起。\n\n" +
          "桥梁组成部分：\n" +
          "1. 人生经历：谈论你做过的事，但不说明具体时间（我去过伦敦）。\n" +
          "2. Since 与 For：从起点开始计时（自2010年起）或计算一段时间（持续10年）。\n" +
          "3. Just, Already, Yet：特殊的信号词，告诉我们事件发生的近期程度或预期程度。\n\n" +
          "看一看：\n" +
          "比较 'I lost my keys' 和 'I have lost my keys'。在第二个句子中，你还在找钥匙！它把过去的丢失和现在的麻烦联系在了一起。\n\n" +
          "为什么桥梁重要：\n" +
          "这种时态让你听起来像个专家级的沟通者。它非常适合面试、交友和分享你那些了不起的成就！"
    },
    topics: [],
    exercises: [
      {
        title: "Life Journey",
        text: "To talk about life experience, we use '[have]' or 'has' plus a past [participle].",
        answers: ["have", "participle"],
        hints: [
          "Hint: Helping verb for 'I'.",
          "Hint: The 3rd form of the verb."
        ]
      },
      {
        title: "Since or For?",
        text: "Use '[since]' for a starting point (2010). Use '[for]' for a length of time (5 years).",
        answers: ["since", "for"],
        hints: [
          "Hint: Focuses on the start.",
          "Hint: Focuses on the duration."
        ]
      },
      {
        title: "Fresh News",
        text: "We use '[just]' for something that happened a second ago. We use '[yet]' for things we expect to happen.",
        answers: ["just", "yet"],
        hints: [
          "Hint: A very short time ago.",
          "Hint: Used in negatives/questions."
        ]
      }
    ]
  },
  {
    id: 11,
    title: { en: "Logic & Harmony: Conditionals & Agreement", zh: "逻辑与和谐：条件句与一致性" },
    description: { 
      en: "Grammar is about logic and harmony! Just like two dancers in a ballroom, the Subject and the Verb must move together in perfect agreement. We also use 'If' sentences to explore logic and predict the future.\n\n" +
          "The Logical Parts:\n" +
          "1. Subject-Verb Agreement: The dance rule! Singular subjects need singular verbs; plural needs plural.\n" +
          "2. Zero Conditional: The 'Always True' logic (If you heat ice, it melts).\n" +
          "3. First Conditional: The 'Future Chance' logic (If it rains, I will stay home).\n\n" +
          "See it in Action!\n" +
          "Think of 'The dog barks' vs 'The dogs bark'. That tiny 's' on 'barks' is the signal that we are talking about just one dog. It's about keeping things in balance.\n\n" +
          "Why the Harmony Matters:\n" +
          "Using agreement and conditionals helps you think like a scientist and speak like a leader. It shows you understand how the world works!",
      zh: "语法关乎逻辑与和谐！就像宴会厅里的两位舞者，主语和动词必须完美配合。我们还使用“If”句子来探索逻辑并预测未来。\n\n" +
          "逻辑组成部分：\n" +
          "1. 主谓一致：跳舞的规则！单数主语需要单数动词，复数需要复数。\n" +
          "2. 零类条件句：“总会发生”的逻辑（如果你给冰加热，它会融化）。\n" +
          "3. 第一类条件句：“未来可能”的逻辑（如果下雨，我将呆在家里）。\n\n" +
          "看一看：\n" +
          "想想 'The dog barks' 与 'The dogs bark'。'barks' 上的那个小 's' 是我们只谈论一只狗的信号。这就是保持平衡。\n\n" +
          "为什么和谐重要：\n" +
          "使用主谓一致和条件句能帮你像科学家一样思考，像领导者一样表达！它显示了你理解世界的运行方式！"
    },
    topics: [],
    exercises: [
      {
        title: "Agreement Rule",
        text: "A singular subject needs a [singular] verb. Example: The dog [barks].",
        answers: ["singular", "barks"],
        hints: [
          "Hint: For one item.",
          "Hint: Add -s for one dog."
        ]
      },
      {
        title: "Fact or Chance?",
        text: "A [Zero] conditional is for facts. A [First] conditional is for future possibilities.",
        answers: ["Zero", "First"],
        hints: [
          "Hint: The number 0.",
          "Hint: The number 1."
        ]
      },
      {
        title: "The Will Power",
        text: "In the First Conditional, we use '[will]' in the main clause. Example: If it rains, I [will] stay home.",
        answers: ["will", "will"],
        hints: [
          "Hint: Future word.",
          "Hint: Used for results."
        ]
      }
    ]
  },
  {
    id: 12,
    title: { en: "The Professional Finisher: Advanced Structures", zh: "进阶终点站：高级结构" },
    description: { 
      en: "You are now a master builder! This final week is about adding the 'extra windows' and 'mirrors' to your language house. Advanced structures help you add detail and shift the focus of your story.\n\n" +
          "The Expert Parts:\n" +
          "1. Relative Clauses: These act like extra labels (who, which) that add information without starting a whole new sentence.\n" +
          "2. Passive Voice: Sometimes the 'doer' isn't important. The passive voice lets the focus stay on what happened to the object.\n" +
          "3. Final Review: Putting all 12 weeks of music, skeletons, engines, and glue together!\n\n" +
          "See it in Action!\n" +
          "Compare 'I saw a man' with 'I saw a man who was wearing a red hat'. The second one is rich, detailed, and professional.\n\n" +
          "Why the Polish Matters:\n" +
          "These structures are the 'polish' on your English. They take you from a basic learner to a fluent, professional speaker. Congratulations on your journey!",
      zh: "你现在是一名大师级建筑师了！这最后一周是为你的语言之家增加“额外的窗户”和“镜子”。定语从句和被动语态等高级结构能帮你增加细节并转移故事的焦点。\n\n" +
          "专家组成部分：\n" +
          "1. 定语从句：这些就像额外的小标签（who, which），无需开启新句子就能增加信息。\n" +
          "2. 被动语态：有时“执行者”并不重要。被动语态让焦点集中在宾语发生了什么上。\n" +
          "3. 终极复习：将12周以来的音乐、骨架、引擎和胶水全部整合在一起！\n\n" +
          "看一看：\n" +
          "比较 'I saw a man' 和 'I saw a man who was wearing a red hat'。第二个句子更丰富、更详细、更专业。\n\n" +
          "为什么抛光重要：\n" +
          "这些结构是英语中的“抛光剂”。它们能让你从初学者变为流利、专业的表达者。恭喜你完成了这段旅程！"
    },
    topics: [],
    exercises: [
      {
        title: "The Person Who...",
        text: "The man [who] is wearing a hat is my uncle. Use '[which]' for things like cars.",
        answers: ["who", "which"],
        hints: [
          "Hint: Pronoun for people.",
          "Hint: Pronoun for things."
        ]
      },
      {
        title: "Shift the Focus",
        text: "In the [passive] voice, the receiver is the star. Example: The window [was] broken.",
        answers: ["passive", "was"],
        hints: [
          "Hint: Opposite of active.",
          "Hint: Past of 'is'."
        ]
      },
      {
        title: "The Final Master",
        text: "After [twelve] weeks of study, you are now a grammar [master]!",
        answers: ["twelve", "master"],
        hints: [
          "Hint: Number of weeks.",
          "Hint: An expert."
        ]
      }
    ]
  }
];

export const RESOURCE_LINKS = [
  { name: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish" },
  { name: "Cambridge Dictionary", url: "https://dictionary.cambridge.org/" },
  { name: "British Council Kids", url: "https://learnenglishkids.britishcouncil.org/" },
  { name: "Merriam-Webster Dictionary", url: "https://www.merriam-webster.com/" },
  { name: "Professor Gong's Profile (Baidu)", url: "https://baike.baidu.com/item/%E9%BE%9A%E5%87%A4%E4%B9%BE/18875898" }
];
