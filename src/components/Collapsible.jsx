import React from "react"

const Collapsible = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = React.useState(open)

  const handleFilterOpening = () => setIsOpen(!isOpen)
  return (
    <>
      <div className="">
        <button
          onClick={handleFilterOpening}
          className="min-w-full bg-black flex justify-between border-b-4 rounded text-white font-semibold py-4 px-4"
        >
          <span className="text-sx font-semibold item-start" style={{ fontFamily: "Roboto" }}>{title}</span>
          {!isOpen ? (
            <span className="material-icons color-white">expand_more</span>
          ) : (
            <span className="material-icons">expand_less</span>
          )}
        </button>

        <div>
          <div>
            {isOpen && <p className="text-sx text-white mt-4 pb-3">{children}</p>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Collapsible
