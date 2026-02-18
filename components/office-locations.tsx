"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, ExternalLink } from "lucide-react"

const offices = [
  {
    country: "United States",
    flag: "US",
    address: "620 S Cleveland Ave, Pierre, SD 57501",
    phone: "+1 518-555-2473",
    color: "from-blue-500 to-indigo-500",
  },
  {
    country: "China",
    flag: "CN",
    address: "Wudu District, Longnan, Gansu China 746099",
    phone: "+1 845-555-3498",
    color: "from-red-500 to-rose-500",
  },
  {
    country: "Australia",
    flag: "AU",
    address: "Queen Victoria, Cundeelee WA 6434",
    phone: "+1 607-555-9840",
    color: "from-emerald-500 to-teal-500",
  },
]

export function OfficeLocations() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {offices.map((office, index) => (
        <motion.div
          key={office.country}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group p-6 bg-card border border-border rounded-xl hover:border-tt-blue-500/50 hover:shadow-lg transition-all duration-300"
        >
          <div
            className={`inline-flex p-3 bg-gradient-to-br ${office.color} rounded-lg mb-4`}
          >
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-semibold text-foreground text-lg mb-2">
            {office.country}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{office.address}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>{office.phone}</span>
          </div>
          <button className="inline-flex items-center gap-1 text-sm text-tt-blue-500 font-medium hover:gap-2 transition-all">
            Get Direction
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      ))}
    </div>
  )
}
