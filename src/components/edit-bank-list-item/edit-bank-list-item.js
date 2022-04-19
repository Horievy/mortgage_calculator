import './edit-bank-list-item.css';

const EditBankListItem = (data) => {
  const { id, bankName, onEdit, isEditingEnabled, toggleEditBlock} = data

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedBankData = getFormData(e.target)

    onEdit(updatedBankData);
    toggleEditBlock(!isEditingEnabled)
  }

  const getFormData = (target) => {
    return {
      bankName: bankName,
      id: id,
      interestsRate: +target.interests.value,
      maximumLoan: +target.maximumLoan.value,
      minDownPayment: +target.minDownPayment.value,
      loanTerm: +target.loanTerm.value,
      } 
  }
      return (
        <form 
        className="edit-bank-list-item"
        onSubmit={onSubmit}>
          <div>
            <h4 className="edit-bank-list-item-label">Edit bank data</h4>
          </div>
          
          <div>
            <div className="form-group">
              <label>Update InterestsRate *:
                <input required name="interests" className="form-control" type="number"></input>
              </label>
            </div>
            <div className="form-group">
              <label>Update Maximum loan *: 
                <input required name="maximumLoan" className="form-control" type="number"></input>
              </label>
            </div>
            <div className="form-group">
              <label>Update Minimum down payment *:
                <input required name="minDownPayment" className="form-control" type="number"></input>
              </label>
            </div>
              <div className="form-group">
              <label>Update Loan term in months *:
                <input required name="loanTerm" className="form-control" type="number"></input>
              </label>
            </div>
          </div>
          
          <div className="edit-bank-list-buttons">
            <button type="submit"
                    className="btn btn-outline-success btn float-right">
                      Save
            </button>
            <button type="button"
                    className="btn btn-outline-danger btn float-right"
                    onClick={() => toggleEditBlock(!isEditingEnabled)}>
                      Cancel
            </button>
          </div>
          
        </form>
      );

}

export default EditBankListItem;