import { useState, useEffect, useRef } from 'react';
const allAssets = [
  {
    id: 1,
    name: 'Bitcoin Cold Wallet',
    category: 'FINANCE',
    typeMain: 'Crypto Account',
    beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben1.svg' },
      { initials: 'JM', image: '/images/dashboard/ben2.svg'},
    ],
    icon:'/images/dashboard/finance.svg',
  },
  {
    id: 2,
    name: 'Family Trust Deeds',
    category: 'LEGAL',
    typeMain: 'Legal Document',
    beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben1.svg' },
      { initials: 'JM', image: '/images/dashboard/ben2.svg'},
    ],
    icon:'/images/dashboard/legal-document.svg',
  },
  {
    id: 3,
    name: 'Google Exe Account',
    category: 'DIGITAL',
    typeMain: 'Access Credentials',
    beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben1.svg' },
      { initials: 'JM', image: '/images/dashboard/ben2.svg'},
    ],
    icon:'/images/dashboard/account.svg',
  },
  {
    id: 4,
    name: 'Zurich Safe Deposit',
    category: 'PHYSICAL',
    typeMain: 'Secure Storage',
    beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben1.svg' },
    ],
    icon:'/images/dashboard/key.svg',
  },
  
];


const categories = ['All', 'FINANCE', 'LEGAL', 'DIGITAL', 'PHYSICAL'];

const SORT_OPTIONS = [
  { key: 'name-asc',  label: 'Name A → Z' },
  { key: 'name-desc', label: 'Name Z → A' },
  { key: 'category',  label: 'Category' },
  { key: 'type',      label: 'Type' },
];

export default function AssetTable({toggleAccessPopup , setSelectedAsset,}) {
  const categoryRef = useRef(null);
  const sortRef     = useRef(null);
  const menuRef     = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortKey, setSortKey] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [menuPos, setMenuPos] = useState({ top: 0, right: 0 });
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = allAssets
    .filter((asset) => {
      const matchSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = selectedCategory === 'All' || asset.category === selectedCategory;
      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (!sortKey) return 0;
      if (sortKey === 'name-asc')  return a.name.localeCompare(b.name);
      if (sortKey === 'name-desc') return b.name.localeCompare(a.name);
      if (sortKey === 'category')  return a.category.localeCompare(b.category);
      if (sortKey === 'type')      return a.typeMain.localeCompare(b.typeMain);
      return 0;
    });

  const totalAssets = 14;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setSortOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div className="tableWrapper">
      {/* Toolbar */}
      <div className="toolbar">
        <div className="searchBox">
          <img src='/images/dashboard/search_filter.svg' alt='search' />

          <input
            className="searchInput"
            type="text"
            placeholder="Filter by asset name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="toolbarRight">
          <div className="categoryDropdownWrapper" ref={categoryRef}>
            <button
              className="categoryBtn"
              onClick={() => setDropdownOpen((p) => !p)}
            >
              {selectedCategory === "All"
                ? "Category"
                : selectedCategory}

              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="dropdownMenu">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={
                      selectedCategory === cat
                        ? "dropdownItemActive"
                        : "dropdownItem"
                    }
                    onClick={() => {
                      setSelectedCategory(cat);
                      setDropdownOpen(false);
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="categoryDropdownWrapper" ref={sortRef}>
            <button
              className={`sortBtn${sortKey ? ' sortBtnActive' : ''}`}
              onClick={() => setSortOpen((p) => !p)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="15" y2="12" />
                <line x1="3" y1="18" x2="9" y2="18" />
              </svg>
              {sortKey ? SORT_OPTIONS.find((o) => o.key === sortKey)?.label : 'Sort'}
            </button>

            {sortOpen && (
              <div className="dropdownMenu">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.key}
                    className={sortKey === opt.key ? 'dropdownItemActive' : 'dropdownItem'}
                    onClick={() => {
                      setSortKey(sortKey === opt.key ? null : opt.key);
                      setSortOpen(false);
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
                {sortKey && (
                  <button
                    className="dropdownItem sortClearBtn"
                    onClick={() => { setSortKey(null); setSortOpen(false); }}
                  >
                    Clear sort
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>


      {/* Table */}
      <div className="tableScroll">
        <table className="dataTable">
          <thead>
            <tr className="tableHeadRow">
              <th className="thAssetName">Asset Name</th>
              <th className="thCategory">Category</th>
              <th className="thType">Type</th>
              <th className="thBeneficiary">Beneficiary</th>
              <th className="thActions">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((asset) => (
              <tr key={asset.id} className="tableRow">
                <td className="tdAssetName">
                  <div className="assetNameCell">
                    <div className="assetRowIcon">
                      <img src={asset.icon} alt={asset.name} />
                    </div>
                    <span className="assetRowLabel">
                      {asset.name}
                    </span>
                  </div>
                </td>

                <td className="tdCategory">
                  <span >
                    {asset.category}
                  </span>
                </td>

                <td className="tdType">
                  <span className="typeMain">
                    {asset.typeMain}
                  </span>
                </td>

                <td className="tdBeneficiary">
                  <div className="avatarGroup">
                    {asset.beneficiaries[0] && (
                      <div className="avatarChip">
                        {asset.beneficiaries[0].image ? (
                          <img src={asset.beneficiaries[0].image} alt={asset.beneficiaries[0].initials} />
                        ) : (
                          asset.beneficiaries[0].initials
                        )}
                      </div>
                    )}
                  </div>
                </td>

                <td className="tdActions">
                  <div className="menuWrapper" ref={openMenuId === asset.id ? menuRef : null}>
                    <button
                      className="menuBtn"
                      onClick={(e) => {
                        if (openMenuId === asset.id) {
                          setOpenMenuId(null);
                        } else {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setMenuPos({
                            top: rect.bottom + 4,
                            right: window.innerWidth - rect.right,
                          });
                          setOpenMenuId(asset.id);
                        }
                      }}
                    >
                      <img src="/images/dashboard/action_icon.svg" alt="actions" />
                    </button>

                    {openMenuId === asset.id && (
                      <div className="contextMenu" style={{ position: 'fixed', top: `${menuPos.top}px`, right: `${menuPos.right}px` }}>
                        <button className="contextItem" type='button' onClick={() => {
                          setSelectedAsset(asset.id);
                          toggleAccessPopup();
                          setOpenMenuId(null);
                        }}>
                          View
                        </button>
                        <button className="contextItem" onClick={() => setOpenMenuId(null)}>
                          Edit
                        </button>
                        <button className="contextItemDanger" onClick={() => setOpenMenuId(null)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="tableFooter">
        <span className="footerCount">
          Showing  {filtered.length} of {totalAssets} secured assets
        </span>

        <div className="paginationRow">
          <button
            className="pageArrowBtn"
            onClick={() =>
              setCurrentPage((p) => Math.max(1, p - 1))
            }
            disabled={currentPage === 1}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <span className="pageLabel">
            Page {String(currentPage).padStart(2, "0")}
          </span>

          <button
            className="pageArrowBtn"
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
