import Link from "next/link";
import { Mail, MessageSquare, ShieldCheck, Clock } from "lucide-react";

export default function SupportCtaSection() {
  return (
    <section className="bg-slate-50/70 px-5 py-16 sm:py-20 border-b border-slate-200/80">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full flex-1 min-w-0 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>24/7 Live Assistance</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Need Immediate Help or Advice on Your IPTV Setup?
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Our dedicated <strong className="text-slate-900 font-semibold">Kemo IPTV VIP support team</strong>{" "}
            <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
              responds in under 5 minutes
            </Link>{" "}
            on WhatsApp. Whether you need help setting up your Firestick or Smart TV, activating credentials, or browsing our{" "}
            <Link href="/installation" className="text-blue-600 font-semibold hover:underline">
              device installation tutorials
            </Link>{" "}
            and{" "}
            <Link href="/faq" className="text-blue-600 font-semibold hover:underline">
              FAQ knowledge base
            </Link>
            , we are here 24 hours a day.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 w-full sm:w-auto">
          <a
            className="btn-whatsapp-clean px-6 py-3.5 text-xs uppercase tracking-wider font-extrabold inline-flex items-center justify-center gap-2 text-center"
            href="https://wa.me/447882781998?text=Hello,%20I%20have%20a%20question%20about%20Kemo%20IPTV."
            rel="noreferrer"
            target="_blank"
          >
            <MessageSquare className="h-4 w-4" />
            Chat on WhatsApp (Live Support)
          </a>
          <a
            className="btn-secondary-kemo px-6 py-3.5 text-xs uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2 text-center"
            href="mailto:support@kemo-iptv.shop"
          >
            <Mail className="h-4 w-4" />
            support@kemo-iptv.shop
          </a>
        </div>
      </div>
    </section>
  );
}
