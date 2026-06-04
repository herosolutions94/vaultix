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

export default function AssetTable({toggleAccessPopup , setSelectedAsset,}) {
  const categoryRef = useRef(null);
  const menuRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  

  const filtered = allAssets.filter((asset) => {
    const matchSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === 'All' || asset.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const totalAssets = 14;

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Category dropdown
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }

      // Action menu
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
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

          <button className="sortBtn">
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
            Sort
          </button>
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
                    {asset.beneficiaries.map((b, i) => (
                      <div
                        key={i}
                        className="avatarChip"
                      >
                        {/* {b.initials} */}
                        <img src={b.image} alt={b.initials} />
                      </div>
                    ))}
                  </div>
                </td>

                <td className="tdActions">
                  <div className="menuWrapper" ref={openMenuId === asset.id ? menuRef : null}>
                    <button
                      className="menuBtn"
                      onClick={() =>
                        setOpenMenuId(
                          openMenuId === asset.id
                            ? null
                            : asset.id
                        )
                      }
                    >
                      ⋮
                    </button>

                    {openMenuId === asset.id && (
                      <div className="contextMenu">
                        <button className="contextItem" type='button' onClick={() => {
                          setSelectedAsset(asset.id);
                          toggleAccessPopup();
                        }}>
                          View
                        </button>
                        <button className="contextItem">
                          Edit
                        </button>
                        <button className="contextItemDanger">
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
