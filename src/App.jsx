import React, { useMemo, useState } from 'react'
import {
  BadgeCheck,
  CalendarDays,
  Camera,
  ChevronRight,
  Clock3,
  House,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Target,
  X,
} from 'lucide-react'

const courses = [
  {
    title: 'Basic Pistol Instruction',
    icon: Target,
    duration: '3.5 Hours',
    level: 'Beginner Friendly',
    desc: 'A fundamentals-based class covering safe handling, storage, grip, stance, loading, unloading, sight alignment, and live-fire confidence.',
    highlights: ['Safe firearm handling', 'Range fundamentals', 'Beginner coaching', 'Confidence building'],
    price: '$125',
  },
  {
    title: 'CCW Training',
    icon: ShieldCheck,
    duration: '4 Hours',
    level: 'Intermediate',
    desc: 'Practical concealed carry instruction focused on responsibility, defensive mindset, legal awareness, and everyday readiness.',
    highlights: ['Carry mindset', 'Defensive principles', 'Situational awareness', 'Responsible carry'],
    price: '$150',
  },
  {
    title: 'Home Defense',
    icon: House,
    duration: '3 Hours',
    level: 'All Skill Levels',
    desc: 'Build a home-defense plan with practical firearm considerations, family coordination, safe staging, and decision-making under stress.',
    highlights: ['Planning and readiness', 'Safe staging', 'Communication', 'Defensive decision-making'],
    price: '$140',
  },
]

const schedule = [
  { date: 'May 4, 2026', className: 'Basic Pistol Instruction', time: '10:00 AM - 1:30 PM', seats: '8 seats' },
  { date: 'May 11, 2026', className: 'CCW Training', time: '9:00 AM - 1:00 PM', seats: '10 seats' },
  { date: 'May 18, 2026', className: 'Home Defense', time: '11:00 AM - 2:00 PM', seats: '8 seats' },
  { date: 'May 25, 2026', className: 'Basic Pistol Instruction', time: '10:00 AM - 1:30 PM', seats: '8 seats' },
]

const gallery = [
  {
    title: 'Classroom Training',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Hands-On Instruction',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Range Preparation',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Student Focus',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Safety First',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Practical Coaching',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
]

const credentials = ['NRA', 'USCCA', 'RSO', 'Certified Firearms Instructor']

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: 'Basic Pistol Instruction',
    date: '',
    message: '',
  })

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Training Inquiry - ${formData.course || 'Guardian Defence'}`)
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse: ${formData.course}\nPreferred Date: ${formData.date}\n\nMessage:\n${formData.message}`,
    )
    return `mailto:james3857@guardian-defence.com?subject=${subject}&body=${body}`
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = mailtoHref
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo.png" alt="Guardian Defence Firearms Training logo" className="h-12 w-auto rounded-xl border border-slate-200 bg-white p-1 shadow-sm" />
            <div>
              <div className="text-xl font-black tracking-wide text-[#123f73]">GUARDIAN</div>
              <div className="-mt-1 text-lg font-extrabold tracking-wide text-slate-500">DEFENCE</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
            <a href="#courses" className="transition hover:text-[#123f73]">Courses</a>
            <a href="#schedule" className="transition hover:text-[#123f73]">Schedule</a>
            <a href="#gallery" className="transition hover:text-[#123f73]">Gallery</a>
            <a href="#about" className="transition hover:text-[#123f73]">About</a>
            <a href="#contact" className="transition hover:text-[#123f73]">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="rounded-2xl bg-[#123f73] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#123f73]/20 transition hover:-translate-y-0.5">Book Training</a>
          </div>

          <button onClick={() => setMobileOpen((v) => !v)} className="rounded-xl border border-slate-300 p-2 md:hidden" aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold">
              {['courses', 'schedule', 'gallery', 'about', 'contact'].map((item) => (
                <a key={item} href={`#${item}`} onClick={() => setMobileOpen(false)} className="capitalize">{item}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="top" className="topo-bg border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#123f73]/15 bg-white px-4 py-2 text-sm font-semibold text-[#123f73] shadow-sm">
              <BadgeCheck className="h-4 w-4" />
              Preparing Guardians, Not Just Shooters.
            </div>
            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight md:text-6xl">
              Professional firearms training for safe, confident, responsible shooters.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Guardian Defence offers practical firearms instruction in Columbus, Ohio with focused courses in basic pistol, concealed carry, and home defense.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {credentials.map((item) => (
                <span key={item} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">{item}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-2xl bg-[#123f73] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#123f73]/20 transition hover:-translate-y-0.5">Request Training</a>
              <a href="#schedule" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-[#123f73] hover:text-[#123f73]">View Schedule</a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#123f73]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-white to-slate-100 p-8 text-center">
                <img src="/logo.png" alt="Guardian Defence Firearms Training logo" className="mx-auto max-h-[420px] w-full max-w-xl object-contain" />
                <p className="mt-4 text-base font-semibold text-[#123f73]">Preparing Guardians, Not Just Shooters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#123f73]">Courses</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Training options built around real-world readiness</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Each course is designed to deliver practical instruction, clear safety habits, and the confidence students need to continue training responsibly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <div key={course.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-2xl bg-[#123f73]/10 px-3 py-2 text-sm font-bold text-[#123f73]">
                  <Icon className="h-5 w-5" />
                  {course.level}
                </div>
                <h3 className="text-2xl font-black">{course.title}</h3>
                <div className="mt-3 flex items-center justify-between text-sm font-semibold text-slate-500">
                  <span>{course.duration}</span>
                  <span>{course.price}</span>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-600">{course.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {course.highlights.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">{item}</span>
                  ))}
                </div>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#123f73]">
                  Request this class <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            )
          })}
        </div>
      </section>

      <section id="schedule" className="topo-bg border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#123f73]">Class Schedule</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">Upcoming training dates</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                This section is ready for your live class calendar. Update these starter entries with your actual dates and range details.
              </p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm">
              <CalendarDays className="h-4 w-4" />
              Ask About Private Classes
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <div className="grid grid-cols-1 border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-bold uppercase tracking-wide text-slate-500 md:grid-cols-4">
              <div>Date</div><div>Class</div><div>Time</div><div>Availability</div>
            </div>
            {schedule.map((item, idx) => (
              <div key={`${item.date}-${idx}`} className="grid grid-cols-1 gap-3 border-b border-slate-100 px-6 py-5 last:border-b-0 md:grid-cols-4 md:gap-4">
                <div className="font-semibold text-slate-900">{item.date}</div>
                <div className="font-medium text-slate-700">{item.className}</div>
                <div className="flex items-center gap-2 text-slate-600"><Clock3 className="h-4 w-4" />{item.time}</div>
                <div className="font-medium text-[#123f73]">{item.seats} available</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#123f73]">Photo Gallery</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">A strong visual section for your brand</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Replace these starter photos with your own class, range, and training photos when you are ready.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-slate-800 shadow-sm">
                  <Camera className="h-4 w-4" /> Training Gallery
                </div>
              </div>
              <div className="p-5"><h3 className="text-lg font-black">{item.title}</h3></div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="topo-bg border-y border-slate-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#123f73]">About</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Instruction focused on safety, judgment, and preparedness</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Guardian Defence is built around the idea that quality firearms instruction should create safer, more capable students, not just better shooters. Training emphasizes practical responsibility, defensive awareness, and foundational confidence.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              From first-time handgun students to people wanting to strengthen their carry or home-defense plan, each session is designed to be professional, approachable, and useful in the real world.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-black">Instructor Profile</h3>
            <div className="mt-6 space-y-4 text-base text-slate-700">
              <p className="text-xl font-black text-slate-900">James Williams</p>
              <p>Certified Firearms Instructor</p>
              <p>NRA | USCCA | RSO</p>
              <p>Columbus, Ohio</p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Beginner Friendly', 'Professional Instruction', 'Safety Focused', 'Practical Coaching'].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#123f73] p-8 text-white shadow-2xl shadow-[#123f73]/20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">Contact</p>
            <h2 className="mt-3 text-3xl font-black">Book training or request class information</h2>
            <div className="mt-8 space-y-6 text-lg">
              <div className="flex items-start gap-3"><Phone className="mt-1 h-5 w-5 text-blue-100" /><div><p className="font-semibold text-blue-100">Phone</p><p>614-348-3879</p></div></div>
              <div className="flex items-start gap-3"><Mail className="mt-1 h-5 w-5 text-blue-100" /><div><p className="font-semibold text-blue-100">Email</p><p>james3857@guardian-defence.com</p></div></div>
              <div className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 text-blue-100" /><div><p className="font-semibold text-blue-100">Service Area</p><p>Columbus, Ohio</p></div></div>
            </div>

            <div className="mt-10 rounded-[1.5rem] bg-white/10 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-100">Live-ready note</p>
              <p className="mt-3 text-sm leading-7 text-blue-50">
                The inquiry form below works immediately by opening an email draft. To accept submissions directly on the website later, connect it to Formspree, Netlify Forms, or your web host's form handler.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-black text-slate-900">Request Training</h3>
            <p className="mt-2 text-slate-600">Fill this out and it will open a ready-to-send email inquiry.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <input name="firstName" value={formData.firstName} onChange={handleChange} className="rounded-2xl border border-slate-300 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-[#123f73]" placeholder="First name" required />
              <input name="lastName" value={formData.lastName} onChange={handleChange} className="rounded-2xl border border-slate-300 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-[#123f73]" placeholder="Last name" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="rounded-2xl border border-slate-300 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-[#123f73] sm:col-span-2" placeholder="Email address" required />
              <input name="phone" value={formData.phone} onChange={handleChange} className="rounded-2xl border border-slate-300 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-[#123f73] sm:col-span-2" placeholder="Phone number" required />
              <select name="course" value={formData.course} onChange={handleChange} className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-700 outline-none focus:border-[#123f73] sm:col-span-2">
                <option>Basic Pistol Instruction</option>
                <option>CCW Training</option>
                <option>Home Defense</option>
                <option>Private Instruction</option>
              </select>
              <input type="text" name="date" value={formData.date} onChange={handleChange} className="rounded-2xl border border-slate-300 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-[#123f73] sm:col-span-2" placeholder="Preferred date or timeframe" />
              <textarea name="message" value={formData.message} onChange={handleChange} className="min-h-[150px] rounded-2xl border border-slate-300 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-[#123f73] sm:col-span-2" placeholder="Tell me what type of training you are looking for" required />
              <button type="submit" className="sm:col-span-2 rounded-2xl bg-[#123f73] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#123f73]/20 transition hover:-translate-y-0.5">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-slate-700">Guardian Defence Firearms Training</p>
            <p>Columbus, Ohio</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#courses" className="hover:text-[#123f73]">Courses</a>
            <a href="#schedule" className="hover:text-[#123f73]">Schedule</a>
            <a href="#gallery" className="hover:text-[#123f73]">Gallery</a>
            <a href="#contact" className="hover:text-[#123f73]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
