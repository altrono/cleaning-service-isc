"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function FloatingButtons() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/0619862198"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Live Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setChatOpen(!chatOpen)}
          className={cn(
            "rounded-full p-3 shadow-lg transition-all duration-300 flex items-center justify-center",
            chatOpen ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90",
          )}
          aria-label={chatOpen ? "Close chat" : "Open live chat"}
        >
          {chatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-40 bg-white rounded-lg shadow-xl w-80 transition-all duration-300 transform",
          chatOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none",
        )}
      >
        <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            <h3 className="font-medium">Live Chat</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-primary-dark"
            onClick={() => setChatOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4 bg-gray-50 h-64 overflow-y-auto">
          <div className="bg-primary/10 p-3 rounded-lg rounded-tl-none mb-3 max-w-[80%]">
            <p className="text-sm">Hello! How can we help you today?</p>
            <span className="text-xs text-gray-500 mt-1 block">ISC Support • Just now</span>
          </div>
          <div className="flex justify-end">
            <div className="bg-gray-200 p-3 rounded-lg rounded-tr-none max-w-[80%]">
              <p className="text-sm">Start typing to chat with us...</p>
            </div>
          </div>
        </div>
        <div className="p-3 border-t">
          <div className="relative">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </div>
          <div className="text-xs text-center mt-2 text-gray-500">
            Or call us at{" "}
            <a href="tel:0619862198" className="text-primary font-medium">
              061 986 2198
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
