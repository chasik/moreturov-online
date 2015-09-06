class OperatorsController < ApplicationController
  before_action :load_operator, only: [:show, :edit, :update, :destroy]
  def index
    @operators = Operator.all
  end

  def new
    @operator = Operator.new
  end

  def show

  end

  def edit

  end

  def create
    @operator = Operator.new (operator_params)
    if @operator.save
      redirect_to @operator
    else
      render :new
    end
  end

  def update
    if @operator.update(operator_params)
      redirect_to @operator
    else
      render :edit
    end
  end

  def destroy
    @operator.destroy
    redirect_to operator_path
  end

  private

    def load_operator
      @operator = Operator.find(params['id'])
    end

    def operator_params
      params.require(:operator).permit(:name, :description)
    end
end
