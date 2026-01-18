function CategoryDropdown({ categories, value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Sía eftir flokki</option>

      {categories.map((cat) => (
        <option key={cat.strCategory} value={cat.strCategory}>
          {cat.strCategory}
        </option>
      ))}
    </select>
  );
}

export default CategoryDropdown;
