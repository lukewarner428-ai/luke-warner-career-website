const testimonialTrack = document.querySelector(".testimonial-track");
const testimonialPrev = document.querySelector("[data-testimonial-prev]");
const testimonialNext = document.querySelector("[data-testimonial-next]");

function scrollTestimonials(direction) {
  if (!testimonialTrack) return;

  const card = testimonialTrack.querySelector(".testimonial-card");
  const gap = 14;
  const scrollAmount = card ? card.getBoundingClientRect().width + gap : 420;

  testimonialTrack.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}

testimonialPrev?.addEventListener("click", () => scrollTestimonials(-1));
testimonialNext?.addEventListener("click", () => scrollTestimonials(1));

const timelineSlides = Array.from(document.querySelectorAll(".timeline-slide"));
const timelinePrev = document.querySelector("[data-timeline-prev]");
const timelineNext = document.querySelector("[data-timeline-next]");
const timelineCurrent = document.querySelector("[data-timeline-current]");
let activeTimelineIndex = 0;

function updateTimeline(nextIndex) {
  if (!timelineSlides.length) return;

  activeTimelineIndex = (nextIndex + timelineSlides.length) % timelineSlides.length;

  timelineSlides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === activeTimelineIndex);
  });

  if (timelineCurrent) {
    timelineCurrent.textContent = String(activeTimelineIndex + 1).padStart(2, "0");
  }
}

timelinePrev?.addEventListener("click", () => updateTimeline(activeTimelineIndex - 1));
timelineNext?.addEventListener("click", () => updateTimeline(activeTimelineIndex + 1));
