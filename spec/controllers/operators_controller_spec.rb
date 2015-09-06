require 'rails_helper'

RSpec.describe OperatorsController, type: :controller do
  let(:operator) { create(:operator) }

  describe 'GET #index' do
    let(:operators) { create_list(:operator, 2) }
    before { get :index }
    it 'populates an array of all operators' do
      expect(assigns(:operators)).to match_array(operators)
    end
    it 'renders index view' do
      expect(response).to render_template :index
    end
  end

  describe 'GET #new' do
    before { get :new }
    it 'assigns a new Operator to @operator' do
      expect(assigns(:operator)).to be_a_new(Operator)
    end
    it 'renders new view' do
      expect(response).to render_template :new
    end
  end

  describe 'GET #show' do
    before { get :show, id: operator }
    it 'assigns the requested operator to @operator' do
      expect(assigns(:operator)).to eq operator
    end
    it 'renders show view' do
      expect(response).to render_template :show
    end
  end

  describe 'GET #edit' do
    before { get :edit, id: operator }
    it 'assigns a new Operator to @operator' do
      expect(assigns(:operator)).to eq operator
    end
    it 'renders new edit' do
      expect(response).to render_template :edit
    end
  end

  describe 'POST #create' do
    context 'with valid attributes' do
      it 'saves the new operator in the database' do
        expect { post :create, operator: attributes_for(:operator) }.to change(Operator, :count).by(1)
      end
      it 'redirects to show view' do
        post :create, operator: attributes_for(:operator)
        expect(response).to redirect_to operator_path(assigns(:operator))
      end
    end
    context 'with invalid attributes' do
      it 'does not save the operator' do
        expect { post :create, operator: attributes_for(:invalid_operator) }.to_not change(Operator, :count)
      end
      it 're-renders new view' do
        post :create, operator: attributes_for(:invalid_operator)
        expect(response).to render_template :new
      end
    end
  end

  describe 'PATCH #update' do
    context 'valid attributes' do
      it 'assigns the requested operator to @operator' do
        patch :update, id: operator, operator: attributes_for(:operator)
        expect(assigns(:operator)).to eq operator
      end
      it 'changes operator attributes' do
        patch :update, id: operator, operator: { name: 'new name', description: 'new description' }
        operator.reload
        expect(operator.name).to eq 'new name'
        expect(operator.description).to eq 'new description'
      end
      it 'redirects to the updated operator' do
        patch :update, id: operator, operator: attributes_for(:operator)
        expect(response).to redirect_to operator
      end
    end
    context 'invalid attributes' do
      before { patch :update, id: operator, operator: { name: 'new name', description: nil } }
      it 'does not change operator attributes' do
        operator.reload
        expect(operator.name).to eq 'OperatorName'
        expect(operator.description).to eq 'OperatorDescription'
      end
      it 're-renders edit view' do
        expect(response).to render_template :edit
      end
    end
  end
  describe 'DELETE #destroy' do
    before { operator }
    it 'delete operator' do
      expect { delete :destroy, id: operator }.to change(Operator, :count).by(-1)
    end
    it 'redirect to index view' do
      delete :destroy, id: operator
      expect(response).to redirect_to operator_path
    end
  end
end
