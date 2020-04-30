import React from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { toast } from 'react-toastify';
import { IoIosArrowBack as BackIcon } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../../components/Wrapper';
import { addDoc } from '../../store/modules/docs/actions';
import { Container, Header, Actions } from './styles';

export default function NewDoc() {
  const dispatch = useDispatch();
  const docs = useSelector((state) => state.docs.docs);
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é Obrigatório'),
    description: Yup.string().required('Email é Obrigatório'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    onSubmit: (values) => {
      dispatch(addDoc(values));
      toast.success('Anotação adiconada com sucesso');
    },
    validationSchema: schema,
  });

  return (
    <Wrapper>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <Header>
            <div>
              <Link to="/">
                <BackIcon size={30} color="#fff" />
              </Link>
              <p>Situação</p>
            </div>
            <Actions>
              <Link to="/">Voltar</Link>
              <button type="submit">Salvar</button>
            </Actions>
          </Header>
          <div className="form-wrapper">
            <div>
              <p>Nome *</p>
              <input
                type="text"
                onChange={formik.handleChange}
                id="name"
                name="name"
                maxLength="20"
              />
              <span>{formik.values.name.length}/20</span>
              {formik.errors.name && formik.touched.name && (
                <h2>{formik.errors.name}</h2>
              )}
            </div>
            <div>
              <p>Descrição *</p>
              <input
                type="text"
                onChange={formik.handleChange}
                id="description"
                name="description"
                maxLength="240"
              />
              <span>{formik.values.description.length}/240</span>
              {formik.errors.description && formik.touched.description && (
                <h2>{formik.errors.description}</h2>
              )}
            </div>
          </div>
        </form>
      </Container>
    </Wrapper>
  );
}
