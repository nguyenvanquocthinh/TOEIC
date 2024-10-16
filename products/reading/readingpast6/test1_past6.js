const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const nameSong = $(".nameSong_name");
const audio = $(".audio");
const question = $(".question");
const translation = $(".type-help1");
const pronunciation = $(".type-help3");
const prevBtn = $(".prev");
const nextBtn = $(".next");

console.log(audio, translation, pronunciation);

const app = {
  currentIndex: 0,
  songs: [
    {
      name: "Test 1.1",
      question:
        "CM, founder and president of retail clothier, announced that he will donate £4,000 to the city center.",
      translation:
        "CM, nhà sáng lập và chủ tịch của nhà bán lẻ quần áo, đã thông báo rằng anh ấy sẽ quyên góp £4,000 cho trung tâm thành phố.",
    },
    {
      name: "Test 1.2",
      question:
        "The funds derive from the sale of tickets to a party held last night at his company's store.",
      translation:
        "Quỹ được lấy từ việc bán những chiếc vé cho một cái bữa tiệc được tổ chức tối hôm qua tại cửa hàng của anh ấy.",
    },
    {
      name: "Test 1.3",
      question: "Mr.M will present a check to the center at opening ceremony.",
      translation:
        "Ông M sẽ trao tặng một tấm séc cho trung tâm tại lễ khai mạc.",
    },
    {
      name: "Test 1.4",
      question:
        "Over the past twenty years, Mr. M has organized several events for CI and community services.",
      translation:
        "Trong hai năm qua, Ông M đã tổ chức nhiều sự kiện cho CI và dịch vụ công đồng.",
    },
    {
      name: "Test 1.5",
      question: "The opening ceremony will begin at 10:00 A.M.",
      translation: "Lễ khai giảng sẽ bắt đầu lúc 10 giờ.",
    },
    {
      name: "Test 1.6",
      question: "The community center offers classes for adults and children.",
      translation:
        "Trung tâm cộng đồng cung cấp các lớp cho cả người lớn và trẻ em.",
    },
    {
      name: "Test 1.7",
      question: "Last night's event was the most successful.",
      translation: "Sự kiện tối qua là thành công nhất.",
    },
    {
      name: "Test 1.8",
      question: "Mr. M plans to open a new location in London next year.",
      translation:
        "Ông M lên kế hoạch để mở một địa điểm mới ở London vào năm tới.",
    },
    // {
    //   name: "Test 1.9",
    //   question:
    //     "T Database System is designed to perform a financial analysis automatically.",
    //   translation:
    //     "Hệ thống dữ liệu T được thiết kế để thực hiện một phân tích tài chính một cách tự động.",
    // },
    // {
    //   name: "Test 1.10",
    //   question:
    //     "The city council approved the bill to increase funding for road project",
    //   translation:
    //     "Hội đồng thành phố đã phê duyệt hóa đơn nhằm tăng kinh phí cho dự án đường bộ",
    // },
    // {
    //   name: "Test 1.11",
    //   question:
    //     "The NI Program honors residents Who volunteer their time to help City.",
    //   translation:
    //     "Chương trình NI vinh danh những cư dân tự nguyện dành thời gian của họ để giúp đỡ thành phố",
    // },
    // {
    //   name: "Test 1.12",
    //   question: "Several architects proposed design plans the building.",
    //   translation:
    //     "Nhiều kiến trúc sư được đề xuất lên kế hoạch thiết kế tòa nhà.",
    // },
    // {
    //   name: "Test 1.13",
    //   question: "The program is limited supervisors within CMC system",
    //   translation:
    //     "Chương trình đã giới hạn những giám sát viên trong phạm vi hệ thống CMC",
    // },
    // {
    //   name: "Test 1.14",
    //   question: "Mr. Koizumi must complete the cost before he leaves.",
    //   translation:
    //     "Ông Koizuimi phải hoàn thành đơn giá trước khi ông ấy rời đi.",
    // },
    // {
    //   name: "Test 1.15",
    //   question:
    //     "Although the new printer is similar to other models, it costs only half as much.",
    //   translation:
    //     "Mặc dù máy in mới giống với những mẫu khác nhưng giá của nó chỉ bằng một nữa.",
    // },
    // {
    //   name: "Test 1.16",
    //   question:
    //     "To address budget deficits, Lunere County plans to limit spending and promote tourism.",
    //   translation:
    //     "Để giải quyết thâm hụt tài chính, thành phố Lunere lên kế hoạch để giới hạn chi tiêu và thúc đẩy du lịch.",
    // },
    // {
    //   name: "Test 1.17",
    //   question:
    //     "Operating instructions are posted above the printer so you can easily refer to them.",
    //   translation:
    //     "Các hướng dẫn vận hành được đăng trên máy in vì thế bạn có thể dễ dàng tham khảo chúng.",
    // },
    // {
    //   name: "Test 1.18",
    //   question:
    //     "The Vickwell Historical Museum will be closed for renovations beginning on Monday.",
    //   translation:
    //     "Bảo toàn lịch sử sẽ được đóng cửa cho việc tu sửa và sẽ bắt đầu vào thứ hai",
    // },
    // {
    //   name: "Test 1.19",
    //   question: "FPN implements the very latest techniques. ",
    //   translation: "FPN thực hiện kĩ thuật mới nhất.",
    // },
    // {
    //   name: "Test 1.20",
    //   question:
    //     "Employees complete their work before it is due may receive bonuses.",
    //   translation:
    //     "Những nhân viên hoàn thành công việc trước kì hạn có thể nhận được tiền thưởng.",
    // },
    // {
    //   name: "Test 1.21",
    //   question: "Thank you for your participation in comunity survey.",
    //   translation:
    //     "Cảm ơn vì sự tham gia của bạn trong việc khảo sát cộng đồng.",
    // },
    // {
    //   name: "Test 1.22",
    //   question:
    //     "Solar energy has become a key factor in the development of additional energy throughout the region.",
    //   translation:
    //     "Năng lượng mặt trời đã trở thành yếu tố chính trong việc phát triển nguồn năng lượng bổ sung trong khu vực.",
    // },
    // {
    //   name: "Test 1.23",
    //   question:
    //     "The LPN company has issued a special report to address concerns regarding the fuel efficiency",
    //   translation:
    //     "Công ty LPN đã ban hành một thông báo đặt biệt để giải quyết những lo ngại liên quan đến việc ảnh hưởng của nhiên liệu.",
    // },
    // {
    //   name: "Test 1.24",
    //   question:
    //     "Company  will focus on techniques that help people think more creatively",
    //   translation:
    //     "Công ty sẽ tập trung vào kỹ thuật giúp con người suy nghĩ sáng tạo hơn",
    // },
    // {
    //   name: "Test 1.25",
    //   question:
    //     "Employees must submit requests for time off to Ms. Cheung for approval.",
    //   translation:
    //     "Nhân viên phải nộp yêu cầu về thời gian nghỉ cho bà Cheung phê duyệt.",
    // },
    // {
    //   name: "Test 1.26",
    //   question:
    //     "Members are free to discuss the issues among themselves before the votes are taken.",
    //   translation:
    //     "Các thành viên được thảo luận tự do về vấn đề của chính họ trước khi các phiếu bầu được thực hiện.",
    // },
    // {
    //   name: "Test 1.27",
    //   question: "Fen Jiang's attempt at a film was clearly a success.",
    //   translation:
    //     "Nỗ lực của Fen Jiang tại một dự án phim rõ ràng là một thành công.",
    // },
    // {
    //   name: "Test 1.28",
    //   question:
    //     "While the NCU parking area is now open, a section has been reserved for employees.",
    //   translation:
    //     "Trong khi khu vực đậu xe NCU hiện tại đang mở, một lựa chọn đã giành cho nhân viên.",
    // },
    // {
    //   name: "Test 1.29",
    //   question:
    //     "Pharmacy technicians are responsible for processing prescriptions as soon as hey are requested.",
    //   translation:
    //     "Những kỹ thuật viên thuốc chịu trách nhiệm cho việc xử lý đơn thuốc ngay sau khi họ được yêu cầu",
    // },
    // {
    //   name: "Test 1.30",
    //   question:
    //     "All laboratory personnel must attend the safety workshop to ensure compliance with new regulations..",
    //   translation:
    //     "Toàn bộ nhân viên phòng thí nghiệm phải tham gia buổi hội thảo an toàn để đảm bảo tuân thủ những quy định mới.",
    // },
  ],

  //   render: function () {
  //     const htmls = this.songs.map((song) => {
  //       return `
  //                     <div class="">
  //               <div class="playlist">
  //                 <button class="prev">
  //                   <i
  //                     class="fa-solid fa-forward fa-rotate-180 fa-xl"
  //                     style="color: #000000"
  //                   ></i>
  //                 </button>
  //                 <div class="playlist__audio">
  //                   <audio
  //                     class="audio"
  //                     controls
  //                     src="${song.path}"
  //                   ></audio>
  //                 </div>
  //                 <button onclick() class="next">
  //                   <i class="fa-solid fa-forward fa-xl" style="color: #000000"></i>
  //                 </button>
  //               </div>

  //               <div class="form_input">
  //                 <input
  //                   class="input active"
  //                   id="text"
  //                   type="text"
  //                   placeholder="Type what you hear..."
  //                 />
  //               </div>

  //               <div class="form_button">
  //                 <button>Help</button>
  //                 <button>Check</button>
  //               </div>
  //             </div>

  //             <div class="help">
  //               <div class="help__translate">
  //                 <i class="fa-solid fa-language fa-2xl" style="color: #000000"></i>
  //                 <span>Vietnamese Translation</span>
  //                 <p class="type-help">
  //                   Complete the challenge or click
  //                   <a onclick="vietnamese()" style="color: red" href=""> here </a>
  //                   to show.
  //                 </p>
  //               </div>
  //               <script>
  //                 const closed = document.getElementById("closed");
  //                 function vietnamese() {
  //                   closed.style.display = "none";
  //                 }
  //               </script>

  //               <div id="closed" class="help__translate1">
  //                 <i class="fa-solid fa-language fa-2xl" style="color: #000000"></i>
  //                 <span>Vietnamese Translation</span>
  //                 <p class="type-help">${song.translation}</p>
  //               </div>

  //               <div class="help__translate2">
  //                 <i
  //                   class="fa-brands fa-soundcloud fa-2xl"
  //                   style="color: #000000"
  //                 ></i>
  //                 <span>Pronunciation </span>
  //                 <p class="type-help">
  //                   Complete the challenge or click
  //                   <a onclick="closedHeader1()" style="color: red" href=""> here </a>
  //                   to show.
  //                 </p>
  //               </div>
  //               <script>
  //                 const header1 = document.getElementById("header1");
  //                 function closedHeader1() {
  //                   header1.style.display = "block";
  //                 }
  //               </script>

  //               <div id="header1" class="help__translate3">
  //                 <i
  //                   class="fa-brands fa-soundcloud fa-2xl"
  //                   style="color: #000000"
  //                 ></i>
  //                 <span>Pronunciation </span>
  //                 <p class="type-help">${song.pronunciation}</p>
  //               </div>
  //             </div>
  //               `;
  //     });
  //     $(".form").innerHTML = htmls.join("");
  //   },

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },

  handleEvents: function () {
    const _this = this;

    // khi next
    nextBtn.onclick = function () {
      _this.nextSong();
      audio.play();
    };

    // khi prev song
    prevBtn.onclick = function () {
      _this.prevSong();
      audio.play();
    };
  },

  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      //   this.currentIndex = 0;
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },

  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      //   this.currentIndex = this.songs.length - 1;
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },

  loadCurrentSong: function () {
    nameSong.textContent = this.currentSong.name;
    translation.textContent = this.currentSong.translation;
    question.textContent = this.currentSong.question;
    pronunciation.textContent = this.currentSong.pronunciation;
  },

  start: function () {
    //định nghĩa các thuộc tính cho object
    this.defineProperties();

    //lắng nghe và xử lý các sự kiện
    this.handleEvents();

    //tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong();

    //render form
    // this.render();
  },
};

app.start();
