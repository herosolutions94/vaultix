import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";

const categories = [
  {
    id: 1,
    name: "Finance",
    icon: "/images/dashboard/finance.svg",
    count: 8,
  },
  {
    id: 2,
    name: "Legal Documents",
    icon: "/images/dashboard/legal-document.svg",
    count: 14,
  },
  {
    id: 3,
    name: "Digital Accounts",
    icon: "/images/dashboard/digital-assets.svg",
    count: 21,
  },
  {
    id: 4,
    name: "Properties",
    icon: "/images/dashboard/property.svg",
    count: 2,
  },
  {
    id: 5,
    name: "Memories",
    icon: "/images/dashboard/memory.svg",
    count: 32,
  },
];

const totalAssets = categories.reduce((sum, c) => sum + c.count, 0);

export default function VaultCategories() {
  const [search, setSearch] = useState("");
  const popupRef = useRef(null);

  const [addCategoryPop, setAddCategoryPop] = useState(false);

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const ICON_OPTIONS = [
    { key: "finance",  label: "Finance",         icon: "/images/dashboard/finance.svg" },
    { key: "legal",    label: "Legal Documents",  icon: "/images/dashboard/legal-document.svg" },
    { key: "digital",  label: "Digital Accounts", icon: "/images/dashboard/digital-assets.svg" },
    { key: "property", label: "Properties",       icon: "/images/dashboard/property.svg" },
    { key: "memory",   label: "Memories",         icon: "/images/dashboard/memory.svg" },
    { key: "key",      label: "Credentials",      icon: "/images/dashboard/key.svg" },
    { key: "lock",     label: "Secure",           icon: "/images/dashboard/lock.svg" },
    { key: "file",     label: "Documents",        icon: "/images/dashboard/file.svg" },
  ];

  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedColor, setSelectedColor] = useState("m_b_2");
  const [name, setName] = useState("");

   useEffect(() => {
      function handleClickOutside(event) {
        if (addCategoryPop && popupRef.current && !popupRef.current.contains(event.target)) {
          setAddCategoryPop(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [addCategoryPop]);
  return (
    <>
    <div className="dashboard-layout">
      <Sidebar />
      <LoggedHeader />
      <div className="dashboard-main">

        {/* Header */}
        <div className="dash_header">
          <div className="left_col">
            <h2>Vault Categories</h2>
            <p>Organize and manage your digital legacy by asset classification through our institutional-grade secure folders.</p>
          </div>
          <div className="right_col">
            <div className="tag_enc">
              <img src="/images/dashboard/green-check.svg" alt="" />
              <span>END-TO-END ENCRYPTED SESSION</span>
            </div>
            <div className="btn_blk">
              <button type="button" href="/dashboard/vault/categories/add-category" className="site_btn color" onClick={() => setAddCategoryPop(true)}>
                <img src="/images/dashboard/add.svg" alt="" />
                <span>Add Category</span>
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="cat_grid">
          {filtered.map((cat) => {
            const pct = Math.round((cat.count / totalAssets) * 100);
            return (
              <div key={cat.id} className="cat_card">
                <div className="cat_card_top">
                  <div className="cat_icon_box">
                    <img src={cat.icon} alt={cat.name}/>
                  </div>
                </div>
                <div className="cat_count_row">
                  <h4 className="cat_name">{cat.name}</h4>
                  <span className="cat_count_label">{cat.count} Assets</span>
                </div>

                <div className="cat_card_footer">
                  <Link href={`/dashboard/vault/categories/${cat.id}`} className="cat_view_btn">
                    VIEW CATEGORY
                  </Link>
                  
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>


    <div className={addCategoryPop ? "add_cate_popup popup open" : "add_cate_popup popup"}>
      <div className="table_dv">
          <div className="table_cell">
              <div className="inner"  ref={popupRef}>
                <div className="x_btn" onClick={() => setAddCategoryPop(false)}></div>
                 <div className="add_cate_pop_header">
                  <h2>Add New Category</h2>
                  <p>Organize your vault assets into structured sections.</p>
                 </div>
                 <form className="add_category_form">

                 
                  <div className="cmn_frm_blk m_b_2">
                    <div className="field_text">
                      <label>Category Name (Required)</label>
                      <input
                        type="text"
                        className="input"
                        placeholder="e.g., Finance, Legal Documents, Digital Assets"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Icon picker */}
                  <div className="cmn_frm_blk m_b_2">
                    <label>SELECT ICON</label>
                    <div className="cat_icon_picker">
                      {ICON_OPTIONS.map((opt) => (
                        <div
                          key={opt.key}
                          className={`cat_icon_opt ${selectedIcon === opt.key ? "active" : ""}`}
                          onClick={() => setSelectedIcon(opt.key)}
                          style={selectedIcon === opt.key ? { borderColor: selectedColor } : {}}
                        >
                          <div className="cat_icon_img">
                            <img src={opt.icon} alt={opt.label} />
                          </div>
                          <span>{opt.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="cmn_frm_blk m_b_2">
                    <div className="field_text">
                      <label>Category Description</label>
                      <textarea className="input" placeholder="Briefly describe what this category includes"></textarea>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="btn_blk text-right">
                    <button type="button" href="/dashboard/vault/categories" className="site_btn lg" onClick={() => setAddCategoryPop(false)}>Cancel</button>
                    <button type="submit" className="site_btn lg color">
                      <span>CREATE CATEGORY</span>
                    </button>
                  </div>

                </form>
              </div>
          </div>
      </div>
    </div>

    </>
  );
}

VaultCategories.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
