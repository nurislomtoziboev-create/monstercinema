const movies = [
    {title:"Оно", genre:"Ужасы", year:2017, rating:7.3, price:35000},
    {title:"Мстители: Финал", genre:"Фантастика", year:2019, rating:8.4, price:45000},
    {title:"Человек-паук: Нет пути домой", genre:"Экшен", year:2021, rating:8.2, price:40000},
    {title:"Интерстеллар", genre:"Фантастика", year:2014, rating:8.7, price:45000},
    {title:"Начало", genre:"Фантастика", year:2010, rating:8.8, price:45000},
    {title:"Джокер", genre:"Драма", year:2019, rating:8.4, price:40000},
    {title:"Гладиатор", genre:"Экшен", year:2000, rating:8.5, price:40000},
    {title:"Темный рыцарь", genre:"Экшен", year:2008, rating:9.0, price:45000},
    {title:"Форсаж 7", genre:"Экшен", year:2015, rating:7.1, price:35000},
    {title:"Титаник", genre:"Мелодрама", year:1997, rating:7.9, price:35000},
    {title:"Аватар", genre:"Фантастика", year:2009, rating:7.9, price:40000},
    {title:"Аватар: Путь воды", genre:"Фантастика", year:2022, rating:7.5, price:45000},
    {title:"Гарри Поттер", genre:"Фэнтези", year:2001, rating:7.6, price:35000},
    {title:"Веном", genre:"Фантастика", year:2018, rating:6.6, price:35000},
    {title:"Бэтмен", genre:"Экшен", year:2022, rating:7.8, price:40000},
    {title:"Доктор Стрэндж", genre:"Фантастика", year:2016, rating:7.5, price:40000},
    {title:"Тор: Рагнарёк", genre:"Фантастика", year:2017, rating:7.9, price:40000},
    {title:"Железный человек", genre:"Экшен", year:2008, rating:7.9, price:35000},
    {title:"Черная пантера", genre:"Экшен", year:2018, rating:7.3, price:40000},
    {title:"Дэдпул", genre:"Комедия", year:2016, rating:8.0, price:40000},
    {title:"Дэдпул 2", genre:"Комедия", year:2018, rating:7.6, price:40000},
    {title:"Веном 2", genre:"Экшен", year:2021, rating:6.0, price:35000},
    {title:"Миссия невыполнима", genre:"Экшен", year:2023, rating:7.7, price:40000},
    {title:"Трансформеры", genre:"Фантастика", year:2007, rating:7.0, price:35000},
    {title:"Пираты Карибского моря", genre:"Приключения", year:2003, rating:8.1, price:35000},
    {title:"Матрица", genre:"Фантастика", year:1999, rating:8.7, price:40000},
    {title:"Чужой", genre:"Ужасы", year:1979, rating:8.5, price:35000},
    {title:"Хищник", genre:"Экшен", year:1987, rating:7.8, price:35000},
    {title:"Конг: Остров черепа", genre:"Приключения", year:2017, rating:6.7, price:40000},
    {title:"Годзилла", genre:"Фантастика", year:2014, rating:6.4, price:35000},
    {title:"Дюна", genre:"Фантастика", year:2021, rating:8.0, price:45000},
    {title:"Дюна: Часть вторая", genre:"Фантастика", year:2024, rating:8.5, price:50000},
    {title:"Оппенгеймер", genre:"Драма", year:2023, rating:8.6, price:45000},
    {title:"Барби", genre:"Комедия", year:2023, rating:6.8, price:40000},
    {title:"Форсаж 10", genre:"Экшен", year:2023, rating:5.7, price:40000},
    {title:"Джон Уик", genre:"Экшен", year:2014, rating:7.4, price:40000},
    {title:"Джон Уик 2", genre:"Экшен", year:2017, rating:7.4, price:40000},
    {title:"Джон Уик 3", genre:"Экшен", year:2019, rating:7.4, price:40000},
    {title:"Джон Уик 4", genre:"Экшен", year:2023, rating:7.6, price:45000},
    {title:"Логан", genre:"Экшен", year:2017, rating:8.1, price:40000},
    {title:"Люди Икс", genre:"Фантастика", year:2000, rating:7.3, price:35000},
    {title:"Первый мститель", genre:"Экшен", year:2011, rating:6.9, price:35000},
    {title:"Стражи Галактики", genre:"Фантастика", year:2014, rating:8.0, price:40000},
    {title:"Стражи Галактики 2", genre:"Фантастика", year:2017, rating:7.6, price:40000},
    {title:"Стражи Галактики 3", genre:"Фантастика", year:2023, rating:7.9, price:45000},
    {title:"Капитан Марвел", genre:"Фантастика", year:2019, rating:6.7, price:35000},
    {title:"Шан-Чи", genre:"Экшен", year:2021, rating:7.3, price:40000},
    {title:"Аквамен", genre:"Фантастика", year:2018, rating:6.8, price:35000},
    {title:"Супермен", genre:"Экшен", year:2025, rating:7.5, price:45000}
];

const baseMoviesCount = movies.length;

while (movies.length < 150) {
    const base = movies[(movies.length - baseMoviesCount) % baseMoviesCount];
    const number = Math.floor((movies.length - baseMoviesCount) / baseMoviesCount) + 2;
    movies.push({
        title: `${base.title} ${number}`,
        genre: base.genre,
        year: base.year + number,
        rating: Math.max(5.5, Math.min(9.2, base.rating - ((number - 1) * 0.1))),
        price: base.price
    });
}

const halls = [
    {
        name:"Monster Hall",
        type:"Стандарт",
        seats:120,
        price:35000
    },
    {
        name:"Purple Hall",
        type:"Premium",
        seats:100,
        price:45000
    },
    {
        name:"Black Hall",
        type:"Стандарт",
        seats:110,
        price:40000
    },
    {
        name:"Premium Hall",
        type:"Premium",
        seats:90,
        price:50000
    },
    {
        name:"IMAX Hall",
        type:"IMAX",
        seats:150,
        price:60000
    },
    {
        name:"VIP Hall",
        type:"VIP",
        seats:50,
        price:80000
    }
];

let selectedMovie = null;
let selectedHall = null;
let selectedSeats = [];
let loaderFinished = false;

function hideLoader() {
    if (loaderFinished) return;

    loaderFinished = true;

    const screen = document.getElementById("loadingScreen");

    if (!screen) return;

    screen.classList.add("hide");
    screen.style.opacity = "0";
    screen.style.pointerEvents = "none";

    setTimeout(() => {
        screen.style.display = "none";
    }, 600);
}

function startLoader() {
    const screen = document.getElementById("loadingScreen");
    const progress = document.getElementById("loaderProgress");
    const percent = document.getElementById("loaderPercent");

    if (!screen) return;

    let value = 0;
    if (progress) progress.style.width = "0%";
    if (percent) percent.textContent = "0%";

    const timer = setInterval(() => {
        value += Math.floor(Math.random() * 6) + 3;

        if (value >= 100) {
            value = 100;
            clearInterval(timer);

            if (progress) progress.style.width = "100%";
            if (percent) percent.textContent = "100%";

            setTimeout(hideLoader, 350);
            return;
        }

        if (progress) progress.style.width = `${value}%`;
        if (percent) percent.textContent = `${value}%`;
    }, 40);

    setTimeout(hideLoader, 4000);
}

function makeCard(movie) {
    return `
        <article class="movie-card">
            <div class="poster-wrap">
                <img class="poster" src="" alt="${movie.title}" loading="lazy">
                <div class="poster-rating">★ ${movie.rating}</div>
            </div>

            <div class="movie-info">
                <h3>${movie.title}</h3>

                <p>
                    ${movie.genre} · ${movie.year}
                </p>

                <div class="movie-bottom">
                    <strong>${movie.price.toLocaleString("ru-RU")} сум</strong>
                    <span>★ ${movie.rating}</span>
                </div>

                <div class="movie-actions">
                    <button class="btn btn-primary movie-buy" data-buy="${movie.title}">
                        Купить
                    </button>

                    <button class="movie-reserve" data-book="${movie.title}">
                        Бронь
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderHome() {
    const grids = document.querySelectorAll(".home-grid");

    if (!grids.length) return;

    grids.forEach((grid, index) => {
        const start = index * 15;
        const list = movies.slice(start, start + 15);

        grid.innerHTML = list.map(makeCard).join("");
    });
}

function renderMovies() {
    const container = document.getElementById("movieRows");

    if (!container) return;

    container.innerHTML = "";

    for (let row = 0; row < 10; row++) {
        const start = row * 15;
        const rowMovies = movies.slice(start, start + 15);

        const section = document.createElement("section");
        section.className = "movie-row";

        section.innerHTML = `
            <div class="row-title">
                <span>MONSTER CINEMA</span>
                <h2>Фильмы ${start + 1}–${start + 15}</h2>
            </div>

            <div class="movie-grid">
                ${rowMovies.map(makeCard).join("")}
            </div>
        `;

        container.appendChild(section);
    }
}

function makeHallCard(hall, index) {
    return `
        <article class="cinema-card">

            <div class="cinema-photo-wrap">
                <img
                    class="cinema-photo"
                    src=""
                    alt="${hall.name}"
                    loading="lazy"
                >

                <div class="cinema-number">
                    0${index + 1}
                </div>
            </div>

            <div class="cinema-info">

                <span class="cinema-type">
                    ${hall.type}
                </span>

                <h3>${hall.name}</h3>

                <p>
                    Удобные кресла · Большой экран ·
                    Премиальный звук
                </p>

                <div class="cinema-details">

                    <span>
                        💺 ${hall.seats} мест
                    </span>

                    <span>
                        ⭐ 4.${index + 5}
                    </span>

                </div>

                <div class="cinema-bottom">

                    <strong>
                        от ${hall.price.toLocaleString("ru-RU")} сум
                    </strong>

                    <button
                        class="btn btn-primary"
                        data-hall="${hall.name}"
                    >
                        Выбрать зал
                    </button>

                </div>

            </div>

        </article>
    `;
}

function renderHalls() {
    const grid = document.getElementById("cinemaGrid");

    if (!grid) return;

    grid.innerHTML = halls.map(makeHallCard).join("");
}

function getMovie(title) {
    return movies.find(movie => movie.title === title);
}

function getHall(name) {
    return halls.find(hall => hall.name === name);
}

function openBooking(movie, hall = null) {
    const modal = document.getElementById("bookingModal");

    if (!modal) return;

    selectedMovie = movie;
    selectedHall = hall || halls[0];
    selectedSeats = [];

    const title = document.getElementById("modalTitle");
    const movieTitle = document.getElementById("modalMovieTitle");
    const movieMeta = document.getElementById("modalMovieMeta");
    const rating = document.getElementById("modalRating");
    const hallSelect = document.getElementById("modalHall");

    if (title) {
        title.textContent = "Бронирование";
    }

    if (movieTitle) {
        movieTitle.textContent = movie.title;
    }

    if (movieMeta) {
        movieMeta.textContent = `${movie.genre} · ${movie.year} · ${movie.price.toLocaleString("ru-RU")} сум`;
    }

    if (rating) {
        rating.textContent = `★ ${movie.rating}`;
    }

    if (hallSelect) {
        hallSelect.innerHTML = halls.map(item => `
            <option value="${item.name}" ${item.name === selectedHall.name ? "selected" : ""}>
                ${item.name}
            </option>
        `).join("");
    }

    createSeats();
    updateBookingSummary();

    modal.classList.add("active");
    document.body.classList.add("modal-open");
}

function closeBooking() {
    const modal = document.getElementById("bookingModal");

    if (!modal) return;

    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}

function createSeats() {
    const map = document.getElementById("seatMap");

    if (!map) return;

    map.innerHTML = "";

    const rows = 7;
    const seatsPerRow = 10;

    for (let row = 1; row <= rows; row++) {
        for (let seat = 1; seat <= seatsPerRow; seat++) {

            const button = document.createElement("button");

            button.type = "button";
            button.className = "seat";
            button.textContent = seat;

            if (
                Math.random() < 0.18
            ) {
                button.classList.add("occupied");
                button.disabled = true;
            }

            button.dataset.row = row;
            button.dataset.seat = seat;

            button.addEventListener("click", () => {

                if (button.classList.contains("occupied")) {
                    return;
                }

                const id = `${row}-${seat}`;

                if (selectedSeats.includes(id)) {
                    selectedSeats = selectedSeats.filter(item => item !== id);
                    button.classList.remove("selected");
                } else {
                    selectedSeats.push(id);
                    button.classList.add("selected");
                }

                updateBookingSummary();
            });

            map.appendChild(button);
        }
    }
}

function updateBookingSummary() {
    const selected = document.getElementById("selectedSeats");
    const total = document.getElementById("totalPrice");

    const price = selectedHall
        ? selectedHall.price
        : selectedMovie
            ? selectedMovie.price
            : 0;

    const sum = selectedSeats.length * price;

    if (selected) {
        selected.textContent = selectedSeats.length;
    }

    if (total) {
        total.textContent = `${sum.toLocaleString("ru-RU")} сум`;
    }
}

function confirmBooking() {
    const content = document.getElementById("bookingContent");

    if (!content) return;

    if (!selectedSeats.length) {
        showToast("Выбери хотя бы одно место");
        return;
    }

    const total = selectedSeats.length * selectedHall.price;

    content.innerHTML = `
        <div class="booking-success">

            <div class="success-icon">
                ✓
            </div>

            <span class="section-label">
                MONSTER CINEMA
            </span>

            <h2>Бронирование подтверждено</h2>

            <p>
                ${selectedMovie.title}
            </p>

            <div class="success-details">
                <div>
                    <span>Зал</span>
                    <strong>${selectedHall.name}</strong>
                </div>

                <div>
                    <span>Мест</span>
                    <strong>${selectedSeats.length}</strong>
                </div>

                <div>
                    <span>Сумма</span>
                    <strong>${total.toLocaleString("ru-RU")} сум</strong>
                </div>
            </div>

            <button
                class="btn btn-primary"
                type="button"
                data-close
            >
                Готово
            </button>

        </div>
    `;

    showToast("Билет успешно забронирован");

    const closeButton = content.querySelector("[data-close]");

    if (closeButton) {
        closeButton.addEventListener("click", closeBooking);
    }
}

function buyMovie(movie) {
    selectedMovie = movie;
    selectedHall = halls[0];
    selectedSeats = [];

    openBooking(movie, halls[0]);
}

function showToast(message) {
    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

function setupBookingEvents() {
    document.addEventListener("click", event => {

        const buyButton = event.target.closest("[data-buy]");

        if (buyButton) {
            const movie = getMovie(buyButton.dataset.buy);

            if (movie) {
                buyMovie(movie);
            }

            return;
        }

        const bookButton = event.target.closest("[data-book]");

        if (bookButton) {
            const movie = getMovie(bookButton.dataset.book);

            if (movie) {
                openBooking(movie);
            }

            return;
        }

        const hallButton = event.target.closest("[data-hall]");

        if (hallButton) {
            const hall = getHall(hallButton.dataset.hall);

            if (hall) {
                const movie = movies[0];
                openBooking(movie, hall);
            }

            return;
        }

        if (event.target.closest("[data-close]")) {
            closeBooking();
        }
    });

    const confirm = document.getElementById("confirmBooking");

    if (confirm) {
        confirm.addEventListener("click", confirmBooking);
    }

    const hallSelect = document.getElementById("modalHall");

    if (hallSelect) {
        hallSelect.addEventListener("change", event => {
            selectedHall = getHall(event.target.value) || halls[0];
            selectedSeats = [];
            createSeats();
            updateBookingSummary();
        });
    }
}

function setupMenu() {
    const button = document.getElementById("menuBtn");
    const nav = document.getElementById("navLinks");

    if (!button || !nav) return;

    button.addEventListener("click", () => {
        nav.classList.toggle("open");
        button.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            button.classList.remove("active");
        });
    });
}

function setupMouseGlow() {
    const glow = document.getElementById("mouseGlow");

    if (!glow) return;

    document.addEventListener("mousemove", event => {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
    });
}

function createPopcorn() {
    const container = document.getElementById("popcornContainer");

    if (!container) return;

    const popcorn = document.createElement("span");

    popcorn.className = "popcorn";
    popcorn.textContent = "🍿";

    popcorn.style.left = `${Math.random() * 100}%`;
    popcorn.style.animationDuration = `${4 + Math.random() * 4}s`;
    popcorn.style.fontSize = `${12 + Math.random() * 14}px`;

    container.appendChild(popcorn);

    setTimeout(() => {
        popcorn.remove();
    }, 8000);
}

function setupPopcorn() {
    setInterval(createPopcorn, 1800);
}

function aiAnswer(text) {
    const message = text.toLowerCase();

    if (
        message.includes("ужас") ||
        message.includes("страш")
    ) {
        return "Если хочется чего-то страшного, попробуй «Оно» или другие фильмы в жанре ужасов. 🍿";
    }

    if (
        message.includes("комед") ||
        message.includes("смеш")
    ) {
        return "Для лёгкого вечера подойдут комедии. Могу посоветовать «Дэдпул» или «Дэдпул 2». 😂";
    }

    if (
        message.includes("экшен") ||
        message.includes("боевик") ||
        message.includes("драк")
    ) {
        return "Для экшена отличный вариант — «Джон Уик 4», «Мстители: Финал» или «Темный рыцарь». 🔥";
    }

    if (
        message.includes("фантаст") ||
        message.includes("космос")
    ) {
        return "Попробуй «Интерстеллар», «Дюну», «Аватар» или «Мстители: Финал». 🚀";
    }

    if (
        message.includes("любов") ||
        message.includes("роман")
    ) {
        return "Для романтического настроения можно посмотреть «Титаник». ❤️";
    }

    if (
        message.includes("лучший") ||
        message.includes("топ") ||
        message.includes("рейтинг")
    ) {
        return "В Monster Cinema среди самых высокооценённых: «Темный рыцарь», «Начало», «Интерстеллар» и «Мстители: Финал». ⭐";
    }

    if (
        message.includes("сегодня") ||
        message.includes("вечер") ||
        message.includes("посмотр")
    ) {
        return "На вечер я бы выбрал «Интерстеллар», «Джон Уик 4» или «Мстители: Финал». Если скажешь жанр, подберу точнее. 🎬";
    }

    return "Я помогу выбрать фильм. Напиши жанр или настроение: ужас, комедия, экшен, фантастика, романтика или просто «что посмотреть». 🎬";
}

function addAIMessage(text, type) {
    const chat = document.getElementById("chatMessages");

    if (!chat) return;

    const message = document.createElement("div");

    message.className = type === "user"
        ? "message message-user"
        : "message message-ai";

    if (type === "user") {
        message.innerHTML = `
            <div class="message-content">
                <span class="message-name">Ты</span>
                <div class="message-bubble">${text}</div>
            </div>
        `;
    } else {
        message.innerHTML = `
            <div class="message-avatar">AI</div>
            <div class="message-content">
                <span class="message-name">Monster AI</span>
                <div class="message-bubble">${text}</div>
            </div>
        `;
    }

    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
}

function setupAI() {
    const input = document.getElementById("aiInput");
    const send = document.getElementById("aiSend");

    if (!input || !send) return;

    const sendMessage = () => {
        const text = input.value.trim();

        if (!text) return;

        addAIMessage(text, "user");

        input.value = "";

        setTimeout(() => {
            addAIMessage(aiAnswer(text), "ai");
        }, 400);
    };

    send.addEventListener("click", sendMessage);

    input.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    document.querySelectorAll(".ai-suggestion").forEach(button => {
        button.addEventListener("click", () => {
            input.value = button.textContent.trim();
            sendMessage();
        });
    });
}

function setupNewsletter() {
    document.querySelectorAll(".newsletter-form").forEach(form => {
        const input = form.querySelector("input");
        const button = form.querySelector("button");

        if (!input || !button) return;

        button.addEventListener("click", () => {
            if (!input.value.trim()) {
                showToast("Введите email");
                return;
            }

            showToast("Вы успешно подписались");
            input.value = "";
        });
    });
}

function setupBrokenImages() {
    document.addEventListener("error", event => {
        if (event.target.tagName === "IMG") {
            event.target.style.background = "linear-gradient(135deg,#241033,#09070c)";
        }
    }, true);
}

function initializeSite() {
    startLoader();
    try { renderHome(); } catch (e) { console.warn(e); }
    try { renderMovies(); } catch (e) { console.warn(e); }
    try { renderHalls(); } catch (e) { console.warn(e); }
    try { setupBookingEvents(); } catch (e) { console.warn(e); }
    try { setupMenu(); } catch (e) { console.warn(e); }
    try { setupMouseGlow(); } catch (e) { console.warn(e); }
    try { setupPopcorn(); } catch (e) { console.warn(e); }
    try { setupAI(); } catch (e) { console.warn(e); }
    try { setupNewsletter(); } catch (e) { console.warn(e); }
    try { setupBrokenImages(); } catch (e) { console.warn(e); }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSite);
} else {
    initializeSite();
}